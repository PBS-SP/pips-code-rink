/* retired: wipe the offline copy, unregister, and reload open pages so they show the closed notice */
self.addEventListener('install',()=>self.skipWaiting());
self.addEventListener('activate',e=>{e.waitUntil((async()=>{for(const k of await caches.keys())await caches.delete(k);await self.registration.unregister();
  for(const c of await self.clients.matchAll({type:'window'}))c.navigate(c.url).catch(()=>{});})());});
