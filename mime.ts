// MIME Types for Web
const mimeTypes: Record<string, string[]> = {
    // application
    'application/javascript': ['js', 'mjs'],
    'application/wasm': ['wasm'],
    'application/json': ['json', 'map'],
    'application/json5': ['json5'],
    'application/pdf': ['pdf'],
    'application/xml': ['xml', 'xsl'],
    // text
    'text/html': ['html', 'htm'],
    'text/markdown': ['md', 'markdown'],
    'text/mdx': ['mdx'],
    'text/typescript': ['ts', 'tsx'],
    'text/jsx': ['jsx'],
    'text/css': ['css'],
    'text/less': ['less'],
    'text/sass': ['sass', 'scss'],
    'text/stylus': ['stylus', 'styl'],
    'text/csv': ['csv'],
    'text/plain': ['txt', 'text', 'conf', 'ini', 'log', 'yaml'],
    // font
    'font/ttf': ['ttf'],
    'font/otf': ['otf'],
    'font/woff': ['woff'],
    'font/woff2': ['woff2'],
    'font/collection': ['ttc'],
    // image
    'image/jpeg': ['jpeg', 'jpg', 'jpe'],
    'image/png': ['png'],
    'image/apng': ['apng'],
    'image/gif': ['gif'],
    'image/webp': ['webp'],
    'image/svg+xml': ['svg', 'svgz'],
    'image/x-icon': ['ico'],
    // audio
    'audio/mp4': ['m4a', 'mp4a'],
    'audio/mpeg': ['mp3', 'm3a'],
    'audio/ogg': ['oga', 'ogg', 'spx'],
    'audio/wav': ['wav'],
    'audio/webm': ['weba'],
    // video
    'video/mp4': ['mp4', 'm4v', 'mp4v', 'mpg4'],
    'video/ogg': ['ogv'],
    'video/webm': ['webm'],
}
const defaultType = 'application/octet-stream'
const typesMap = Object.keys(mimeTypes).reduce((map, contentType) => {
    mimeTypes[contentType].forEach(ext => map.set(ext, contentType))
    return map
}, new Map<string, string>())

/** get content type by file name */
export function getContentType(filename: string): string {
    const ext = filename.split('.').pop()!.toLowerCase()
    return typesMap.get(ext) ?? defaultType
}
