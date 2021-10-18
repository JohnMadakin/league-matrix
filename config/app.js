module.exports = {
  port: process.env.PORT || 8080,
  environment: process.env.NODE_ENV,
  useClusters: process.env.USE_CLUSTERS,
  clusterWorkers: process.env.THRONG_WORKERS,
};
