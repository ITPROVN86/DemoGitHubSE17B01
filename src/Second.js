import { PermissionConsumer } from "./PermissionContext";

export default () => (
    <PermissionConsumer name="second">
      <div>
        <button>Second</button>
      </div>
    </PermissionConsumer>
   );