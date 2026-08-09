const { Redis } = require("@upstash/redis");

const memoryStore = global.__quizboltStore || new Map();
global.__quizboltStore = memoryStore;

const redisUrl =
  process.env.UPSTASH_REDIS_REST_URL || process.env.KV_REST_API_URL;
const redisToken =
  process.env.UPSTASH_REDIS_REST_TOKEN || process.env.KV_REST_API_TOKEN;
const hasRedis = Boolean(redisUrl && redisToken);
const redis = hasRedis
  ? new Redis({
      url: redisUrl,
      token: redisToken,
    })
  : null;

async function get(key) {
  if (redis) {
    return redis.get(key);
  }
  return memoryStore.has(key) ? memoryStore.get(key) : null;
}

async function set(key, value) {
  if (redis) {
    await redis.set(key, value);
    return;
  }
  memoryStore.set(key, value);
}

async function del(key) {
  if (redis) {
    await redis.del(key);
    return;
  }
  memoryStore.delete(key);
}

async function list(prefix) {
  if (redis) {
    const keys = await redis.keys(`${prefix}*`);
    return keys || [];
  }
  return Array.from(memoryStore.keys()).filter((k) => k.startsWith(prefix));
}

module.exports = {
  get,
  set,
  del,
  list,
  hasRedis,
};
