import { PermissionConsumer } from "./PermissionContext";

export default () => (
    <PermissionConsumer name="third">
      <div>
        <button>Third</button>
      </div>
    </PermissionConsumer>
   );