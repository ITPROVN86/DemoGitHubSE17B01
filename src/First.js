import { PermissionConsumer } from "./PermissionContext";

export default () => (
    <PermissionConsumer name="first">
      <div>
        <button>First</button>
      </div>
    </PermissionConsumer>
   );