// This runner is auto-generated by Brittle

runTests()

async function runTests () {
  const test = (await import('brittle')).default

  test.pause()

  await import('./auth.js')
  await import('./basic.js')
  await import('./bitfield.js')
  await import('./cache.js')
  await import('./clear.js')
  await import('./compat.js')
  await import('./conflicts.js')
  await import('./core.js')
  await import('./encodings.js')
  await import('./encryption.js')
  await import('./extension.js')
  await import('./merkle-tree.js')
  await import('./mutex.js')
  await import('./oplog.js')
  await import('./preload.js')
  await import('./remote-bitfield.js')
  await import('./replicate.js')
  await import('./sessions.js')
  await import('./snapshots.js')
  await import('./storage.js')
  await import('./streams.js')
  await import('./timeouts.js')
  await import('./user-data.js')

  test.resume()
}
