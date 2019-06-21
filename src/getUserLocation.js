export function getUserLocation() {
  const url = "http://ip-api.com/json/";
  const ipAddress = "";
  const userLocationPromise = fetch(`${url}${ipAddress}
  `).then(data => data.json());
  return userLocationPromise;
}
