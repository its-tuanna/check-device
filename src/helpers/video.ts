export const requestVideoPermission = async () => {
  if ("mediaDevices" in navigator && "getUserMedia" in navigator.mediaDevices) {
    let stream = await navigator.mediaDevices.getUserMedia({
      video: true,
      audio: true,
    });
    console.log("All tracks:", stream.getTracks());
    let { width, height } = stream.getVideoTracks()[0].getSettings();
    console.log("width: " + width + " height: " + height);
  }
};

export async function getDevices() {
  const devices = await navigator.mediaDevices.enumerateDevices();
  console.log("All devices:", devices);
}

export async function returnGetDevices() {
  return navigator.mediaDevices.enumerateDevices();
}
