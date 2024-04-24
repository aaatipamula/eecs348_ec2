// General purpose function to hide element children
function hideChildren(elemID) {
  const elem = document.getElementById(elemID);
  for (const child of elem.children) {
    child.style.visibility = 'hidden' 
  }
}

// Timeout function
const sleep = (delay) => new Promise((resolve) => setTimeout(resolve, delay))

// Animate my signature
async function animateSignature(signatureID, durationMultiplier) {
  const signature = document.getElementById(signatureID);


  for (const child of signature.getElementsByTagName('path')) {
    child.style.visibility = 'visible'

    let signatureLen = child.getTotalLength();
    let duration = Math.floor(signatureLen * durationMultiplier);

    child.style.strokeDasharray = signatureLen + ' ' + signatureLen;
    child.style.strokeDashoffset = signatureLen;

    let animation = child.animate(
      [{strokeDashoffset: signatureLen}, {strokeDashoffset: 0}],
      {duration: duration, iterations: 1}
    );

    animation.onfinish = () => {
      child.style.strokeDasharray = 0;
      child.style.strokeDashoffset = 0;
    }

    await sleep(duration);
  }

  signature.querySelector('circle').style.visibility = 'visible';
}
