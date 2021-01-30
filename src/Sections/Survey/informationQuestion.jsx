import React from "react";
import styled from "styled-components";
import { view } from "@risingstack/react-easy-state";

const InformationImage = () => {
  return (
    <Image
      alt="information statement"
      src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAABNYAAABHCAIAAABEYl0dAAAACXBIWXMAAA4mAAAN/wHwU+XzAAAMJ0lEQVR42u3dLZOjygLG8fOdUCgcCoVD4VAoHAqFQ+ULRKXqiigU5hYKh0LhUCgcirpmbndDEjpvJGeyZ7b2/H9qJ5NAv+0UT7pp/vra8j8AAAAAAF6wGTD/IoICAAAAAIigAAAAAAAiKAAAAAAARFAAAAAAABEUAAAAAEAEJYICAAAAAIigAAAAAAAiKAAAAAAARFAAAAAAABEUAAAAAEAEJYICAAAAAIigAAAAAAAiKAAAAAAAn4+gAAAAAAB8BBEUAAAAAEAEBQAAAAAQQQEAAAAAIIICAAAAAIigAAAAAAAiKE0AAAAAACCCAgAAAACIoAAAAAAAEEEBAAAAAERQAAAAAAARFAAAAAAAIigAAAAAgAgKAAAAAAARFAAAAABABAUAAAAAEEEBAAAAACCCAgAAAACIoAAAAAAAEEEBAAAAAERQAAAAAAARFAAAAACAf0EEHcvYMgzDDPPx6jfdzjUM/9CrH+rUNozb9yz6IvVtUxzFzZqpiEzDSqpXTq6d4sY7R/onlbJY8WeK9Yk6DkffMNxde7eF955hePvux4ZXHpgPO/hP97sOYAAAABBBf86Qh+Iq2bIMMzj2fzeCNpljGHa4L6q6G7/aPEt3xUuhhwj6iTqOzTHL9tUw/9TuXDMsxh+PoOMwLvULjsP880QEfULvOAAAAOCPjKD9wTcNN8tlFLwOKq9H0CoWETYq3k8YRNCP13E4BsZvEEEnMSZM24uy2DPdKI1927Si8l+Wr97q3KuOAwAAAP7ECNrKCOjuujmpOFnzfgQtY9O4sNP65rp7bI5p4NqWaZiW7QbpsRkfRNC+3IWuWtBru+Gu6rQjTW2ehZ5jydOZluNHu7KfHl7Mi6O2zTH2HXVaebTha6j3kWeb4gWRjQ6XUqgShp4soSyiF2ZFdz5ynViiDGV7jNxTzr6KoGOTeabhxEW/Wd+tOq7qkAfimNllca3qIW25rXzFDPLhshB3zMNVX6jguUTQtivSQLWdrPu+Hh4nofoQB6qA51Y+JypZcTFILlWwnCBdtZWev4a2KvaRI0dFuMurdpjeP2OhzljX+8AxDTupX2lhjRy3ovu6Mgvdufp+knfTJNvDVQcQVbic8GsSlYv8yyiLD5e2Oo2r02dVF2arD2917sOa3um4+e2JfLsopTheEO+rfv0f1wzztkg8yzSD//w3sW+/aVj+d7f8kQUAAMBvEkGnOnVOCVBNh9pJNb0bQce+a4+huKoODm3bdsOkR9Cxzlxx4CDLq6ZpqjwLbMP0ds10c4qpkT9YfirfWZeH2PNcUbzlSGMZiw+68aGo6rou813oqDh0L9aoC3rb80U8avuhb/NYHscPgyAr5QtNLoPR+dq8k1U/HVoeWdTUjk8zdrLiph8EXrzPi7KRRdUiaHcMRUYNj0sQe17f53XUiA5Zp3MRf0zLspZFratA1K/vBR17EZUt0Rf7phU1nZYI6viB56fHoqpKVSBR+vsTklO7lO9YVnVVHlNfHMw9t7L8usHyPD/cy3YcOpEMrWdzrGOVOHaYhLaTVA9C4tYZI9mYge8nh6Is22Gzha+pNeKuF0SHqhMlrnbq+EHoR8d6eUHUKVomH2WBDXVsWZrikHhiZJzrdxpX/nywQeRa+Xv5LcALnfu0prcddynKpZrGuR3nbxbEqBThvijrbprrqcXNNnN/9DZgAAAAEEGvA4LciOicaeabQtdrJd9diFsuoWIdQTsZpLSkOFWJLSdwhqtTyJWb+qJclYpPR2pEWtbX+nbF/lC046MIur4eVxf/66vxVl6w+/PNr0OVhSKhtOuPm7I60yXD6Ffylwg6lCInWP4l/zyv70YddWqi65SNpjKy7DhLbOtULjUlOddR246oVqfTF+IaTlpPWra10/peR/ZFGgZx3n/df3MlZ7y1MaKGxSUWa4Yisi1ZcTG0ROHL4W+cUc2xn0PeCyPqbgQ9R8xldK4j+FjIcb/Mr7bHOAjSVUnVQDl1/jyu1m2pjrYMla3O3ajpVcepftO+EhplNU/HX7p11Qw36xhkzf+9O0EBAADgN4ygw5y0zhfno0g52pX8ByKomqmTi3NXVPIVGWDST3Fn1aC6Rl+O1B8DcVQ/Kx6u57yKoOtYdyqGfmS5APmuZp2r7kwvLRF0bHaeabrpaoJvo74bdbwim/y09lT8W3RNL7rsVA35Wydtvl6JoMv7vi7Z9dxbW2QGPL9ZRVBtEDy91XTq6mYePX1Td6/eKXx7Rn8VcbdG1N0Iug5iN6G5SqzLFw63/0lWI2ceV/F6pcDqaO917k1N9Y5T1bS0RQlLx83NvyTUWj/Zeh2DSqBBPvAXFgAAAL9JBFVXrFaU9+PJUOjTOB+IoPP04z3zZfvqFDIJXM2nTfME1XIF38v73uRHTdsL4uxYdeOzCLqeEFIX9OsbK5cIurwwyFtBfce2TEEv4JJh9HKpKOBHcmXk1UX+Rn0366gnONmscyHlZqmymWSnzYFPttwpomxGUD0j6snnelhUhyT09LbQAqH+yQ/sdvTKGadXW/h+BF2PW7Wwer3rzxxBl/n1qSt3ceA61ro0WgTV54/l5Pxy5u3OfVpTvePu3sbZXKZkVbtffYcyr2NY5ndVAo3Y3AgAAAC/TQR9fCl/uUfyQxHUSYrmWttdL8S9cwWvVsRq8UxucZPv0yhwLLXLzbH7dgSd2p033wpa1m2nFLG9GUHl6YPAFeULV2srN+r7Uh1XvxMJRi2UlslzLr4ojXpF3hp6Thgfi6BjlTrz7YpVs7TFMTR/ZQR9+4xbI+pbEVQuHT7dfzmXptn734ig687dqunrEbR/1O5jEVlL7pTlenTDLwAAAIig/7x5IyInyeXePhdVkbiXm90+sRA3v11PuLZeiHu74LXbuw/XMU7t3jevVkX+rQi6LLRdXcxPcl3n5iyoeqk7Bpa84e706Y36vlnHJWiWvYiiy0Fl2ayoFFnJvEzAfiqC6hVfmjL4lbOg759xa0R9J4LOiVGbOpwXvL4UQZ937mZN7y3E1Uf3cuNpMT5s9/NdsfMa7mrizysAAAB+jwg6Xw/fSw7z8tz50vcT2xHNW65o0zFDuUuyvL1OuXLDHf2uvXnLlflIvfhQcmwn7erffvAw0rci6M3kVSfvOt2MoKcdcYdczjydN2R9Xt/ndbwX0fee6aS72DJPTS8f1uKk+8Q217vlXkXQVUe9FUFXm+ssOV/OEF9a+fMR9P0zboyo70TQm42a5l1pz/dcPo+gzzt3s6ZXHXdnO6Jl97D+WburXbuCOLL1+38BAACAH42g80ZE9++dW21S9IkI+jXWqVyt6iXqkSdVsY/Xi1e1h7KomVlTvbOSz0ZxPc89HWn+pR1kR/VQlqo4xJ6asbpXh7ciqFq9aLjxUT1JQz5vMsxSuYtMeKi7YdqKoDIAyXW7TlqP2/V9WsdHCUo+i2V1h64IH5ZtrefbtAg6P/oj2BWleoLMWwtx1RcQppcWdSufKpL4XpzJEObEeSPXuX5+Ie77Z9xo4e9E0HPblU3byAN7Xpqp0ZGKthw3IuhG527V9LrjVg9lqdXA9EUxz0+redjupwX2l+GxbPBcMCUKAACAn4qgy0ZED7YqmTfGlVfVH4mgX2q3nyRwbbkDi2k5XrQrzrujaqf4mrpCJEBLvs92w13Vq3WFp6zXV/vYF4dRm7hYjh9lxYNdVt/cjmioRFqw5tIFqZxNG4pYvGCqe003I6gKRY6amRu26rtVxxuTmhvTyq56Qpvk0iKo3LZJFt6y3ax+ezuivkwD51S6rOwn+dxTRxzNiUXa/xXbEb17xs0W/kYEFb2TJ766z9i0vWhfDV9Tsw/EiSw3raaNCLo5gJ/W9LrjZDXrgxjx6hPyI+mxGbfbfZ56Xf1qWe9LBAUAAMCPRVAAfyr5BdNpuS4AAABABAXwy4xyVThb4QIAAIAICuBXZs9O3iAtn5xrMQUKAAAAIiiAX6nZuaa6gfXQMAMKAAAAIigAAAAAgAgKAAAAACCCAgAAAABABAUAAAAAEEEBAAAAACCCAgAAAACIoAAAAAAAIigAAAAAAERQAAAAAAARFAAAAAAAIigAAAAAgAgKAAAAACCCAgAAAABABAUAAAAAEEEBAAAAACCCAgAAAACIoAAAAAAAIigAAAAAAB/1f2Gc632pHZYAAAAAAElFTkSuQmCC"
    />
  );
};

export default view(InformationImage);

const Image = styled.img`
  width: clamp(500px, 75vw, 1300px);
`;
