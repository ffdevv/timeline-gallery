const Config = {
  backendBaseUrl: "https://example.com/",
  endpoints: {
    getImagesData: "/getImagesData"
  }
}

function trim(str, ch) {
  var start = 0, 
    end = str.length;
  while(start < end && str[start] === ch)
    ++start;
  while(end > start && str[end - 1] === ch)
    --end;
  return (start > 0 || end < str.length) ? str.substring(start, end) : str;
}

export const getConfigEndpoint = key => {
  if (Config.backendBaseUrl === undefined){
    throw new Error("Config missing the base url");
  }
  if (Config.endpoints === undefined || ! key in Config.endpoints){
    throw new Error("Config missing the endpoint");
  }
  const b = trim(Config.backendBaseUrl, "/");
  const e = trim(Config.endpoints[key], '/');
  return `${b}/${e}`;
}

export default Config;