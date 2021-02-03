export default text => {
  console.log({ text });
  // /[-a-zA-Z0-9@:%_+.~#?&\/=]{2,256}\.[a-z]{2,4}\b(?:\/[-a-zA-Z0-9@:%_+.~#?&\/=\[\]]*)/gi - regex
  return text.replace(/[-a-zA-Z0-9@:%_+.~#?&\/=]{2,256}\.[a-z]{2,4}\b(?:\/[-a-zA-Z0-9@:%_+.~#?&\/=\[\]]*)/gi, match => {
    console.log({ match });
    return `<a class='parsed_link' target='_blank' href='${match}'>${match}</a>`
  })
}
