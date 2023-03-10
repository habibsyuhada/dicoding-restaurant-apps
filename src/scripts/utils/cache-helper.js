import CONFIG from '../globals/config';

const CacheHelper = {
  async cachingAppShell(requests) {
    console.log('Cache API : cachingAppShell');
    const cache = await this._openCache();
    cache.addAll(requests);
  },

  async deleteOldCache() {
    console.log('Cache API : deleteOldCache');
    const cacheNames = await caches.keys();
    cacheNames
      .filter((name) => name !== CONFIG.CACHE_NAME)
      .map((filteredName) => caches.delete(filteredName));
  },

  async revalidateCache(request) {
    console.log('Cache API : revalidateCache');
    const response = await caches.match(request);

    if (response) {
      this._fetchRequest(request);
      return response;
    }
    return this._fetchRequest(request);
  },

  async _openCache() {
    console.log('Cache API : _openCache');
    return caches.open(CONFIG.CACHE_NAME);
  },

  async _fetchRequest(request) {
    console.log('Cache API : _fetchRequest');
    const response = await fetch(request);

    if (!response || response.status !== 200) {
      return response;
    }

    await this._addCache(request);
    return response;
  },

  async _addCache(request) {
    console.log('Cache API : _addCache');
    const cache = await this._openCache();
    cache.add(request);
  },
};

export default CacheHelper;
