export function getOS() {
  const userAgent = window.navigator.userAgent;
  const platform =
    window.navigator?.userAgentData?.platform || window.navigator.platform;

  const macosPlatforms = [
    "Mac",
    "MacOS",
    "Macintosh",
    "MacIntel",
    "MacPPC",
    "Mac68K",
  ];
  const windowsPlatforms = ["Win32", "Win64", "Windows", "WinCE"];
  const iosPlatforms = ["iPhone", "iPad", "iPod"];
  const androidPlatforms = ["Android"];
  const linuxPlatforms = ["Linux"];

  let os = null;

  if (macosPlatforms.includes(platform)) {
    os = "macos";
  } else if (iosPlatforms.includes(platform)) {
    os = "ios";
  } else if (windowsPlatforms.includes(platform)) {
    os = "windows";
  } else if (
    androidPlatforms.some((androidPlatform) =>
      userAgent.includes(androidPlatform)
    )
  ) {
    os = "android";
  } else if (
    linuxPlatforms.some((linuxPlatform) => platform.includes(linuxPlatform))
  ) {
    os = "linux";
  }

  return os;
}

var launchAuroraEditor = function () {
  window.location.replace("auroraeditor://marketplace");
};

// TODO: Add a fallback url to download the editor
export var openAuroraEditor = function () {
  launchAuroraEditor();
};
