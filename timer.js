var totalSeconds = 0;
// fill progress bar over interval
function capture(count) {
  setInterval(function () {
    if (displayedProgressValue === initialProgressValue) return
    ++totalSeconds
    console.log(totalSeconds);
    displayedProgressValue = displayedProgressValue + 0.1
    console.log('displayedProgressValue.toFixed(1): ', displayedProgressValue.toFixed(1));
    setCurrentProgressValue(displayedProgressValue)
  }, 50);
}