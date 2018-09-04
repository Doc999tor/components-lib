export default (c, u) => c !== '0' && c !== 0 ? moment.utc().add(c, u).format('YYYY-MM-DD hh:mm:ss') : undefined
