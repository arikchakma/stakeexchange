export const isNonNull = (obj: any): boolean => {
  return obj === null || obj === undefined || typeof obj === "undefined";
};

export const isAddress = (address: string): boolean => {
  return /0x([0-9]|[a-f]|[A-F]){40,40}/g.test(address);
};

export const shortenAddress = (address: string): string => {
  if (!isAddress(address)) {
    return "--";
  } else {
    const len = address.length;
    const prefix = address.substring(0, 5);
    const postfix = address.substring(len - 4, len);
    return prefix + "..." + postfix;
  }
};

export const copyToCliboard = async (content: any): Promise<boolean> => {

  const fallback = (): boolean => {
    const textArea = document.createElement("textarea");
    textArea.value = content;

    // Avoid scrolling to bottom
    textArea.style.top = "0";
    textArea.style.left = "0";
    textArea.style.position = "fixed";
    textArea.style.display = "none";

    // create a temporary element
    document.body.appendChild(textArea);
    textArea.focus();
    textArea.select();

    // copy
    let success: boolean = true;
    try {
      success = document.execCommand("copy");
    } catch (err) {
      console.log("there is an err while copy");
    }

    // remove
    document.body.removeChild(textArea);
    return success;
  }

  // for old web browsers
  if (!navigator.clipboard) {
    return fallback();
  } 
  
  try {
    await navigator.clipboard.writeText(content);
    return true;
  } catch (err) {
    console.log("there is an err while copy");
    return false;
  }

}