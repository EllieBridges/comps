import Button from "../components/Button";
import { GoBug, GoMoon, GoSun } from "react-icons/go";

function ButtonPage() {
  return (
    <div>
      <div>
        <Button rounded success outline>
          <GoBug />
          Hello!
        </Button>
      </div>
      <div>
        <Button danger>Bye!</Button>
      </div>
      <div>
        <Button rounded warning>
          <GoSun />
          More
        </Button>
      </div>
      <div>
        <Button secondary outline>
          <GoMoon />
          Hide Ads
        </Button>
      </div>
      <div>
        <Button primary>YO</Button>
      </div>
    </div>
  );
}

export default ButtonPage;
