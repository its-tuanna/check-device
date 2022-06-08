const constrain = {
  video: { facingMode: "user" },
  audio: true,
};

export const requestVideoPermission = async () => {
  if ("mediaDevices" in navigator && "getUserMedia" in navigator.mediaDevices) {
    let stream = await navigator.mediaDevices.getUserMedia(constrain);
    console.log("All tracks:", stream.getTracks());
    // let { width, height } = stream.getVideoTracks()[0].getSettings();
    // console.log("width: " + width + " height: " + height);
  }
};

export const returnVideoTracks = async () => {
  if ("mediaDevices" in navigator && "getUserMedia" in navigator.mediaDevices) {
    let stream = await navigator.mediaDevices.getUserMedia(constrain);
    console.log("All tracks:", stream.getTracks());
    console.log(
      "--------------------------------------------------------------------------------------------------------------------------------------"
    );
    console.log("All video tracks:", stream.getVideoTracks());
    console.log(
      "--------------------------------------------------------------------------------------------------------------------------------------"
    );
    return stream.getVideoTracks();
  }
  return [];
};

export async function getDevices() {
  const devices = await navigator.mediaDevices.enumerateDevices();
  console.log("All devices:", devices);
}

export async function returnGetDevices() {
  const devices = await navigator.mediaDevices.enumerateDevices();
  console.log("All devices:", devices);
  return devices;
}
