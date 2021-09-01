function urlValidator(url) {
  var regex = new RegExp(/^(http|https):\/\/[^ "]+$/);
  return regex.test(url)
}

export {urlValidator}
