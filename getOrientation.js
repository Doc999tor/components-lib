export default (file, callback) => {
	const reader = new FileReader()
	reader.onload = e => {
		const view = new DataView(e.target.result)
		const length = view.byteLength
		let offset = 2
		if (view.getUint16(0, false) !== 0xFFD8) return callback(new Error('-2'))
		while (offset < length) {
			const marker = view.getUint16(offset, false)
			offset += 2
			if (marker === 0xFFE1) {
				if (view.getUint32(offset += 2, false) !== 0x45786966) return callback(new Error('-1'))
				const little = view.getUint16(offset += 6, false) === 0x4949
				offset += view.getUint32(offset + 4, little)
				const tags = view.getUint16(offset, little)
				offset += 2
				for (let i = 0; i < tags; i++) {
					if (view.getUint16(offset + (i * 12), little) === 0x0112) {
						return callback(view.getUint16(offset + (i * 12) + 8, little))
					}
				}
			} else if ((marker & 0xFF00) !== 0xFF00) break
			else offset += view.getUint16(offset, false)
		}
		return callback(new Error('-1'))
	}
	if(file) {
		reader.readAsArrayBuffer(file)
	}
}
