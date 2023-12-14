import { getRandom } from "../utils/numbers";

export const homePage = `
  <div>
    <p>HOME</p>
    <p>RADNOM: ${getRandom()}</p>
    <button data-btn="login">GO TO LOGIN</button>
  </div>
`