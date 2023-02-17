class Beat {
  get now() {
    const date = new Date();
    return Math.floor((((((date.getUTCHours() + 1) * 60 + date.getUTCMinutes()) * 60 + date.getSeconds()) * 1000 + date.getMilliseconds()) / 864)) / 100;
  }
}

module.exports = { Beat };