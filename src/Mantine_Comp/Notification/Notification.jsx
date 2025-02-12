import { IconX, IconCheck } from '@tabler/icons-react';
import { Notification } from '@mantine/core';

export const Demo=()=> {
  const xIcon = <IconX size={20} />;
  const checkIcon = <IconCheck size={20} />;

  return (
    <>
      {/* <Notification icon={xIcon} color="red" title="Bummer!">
        Something went wrong
      </Notification> */}
      <Notification
      style={{border:"0px solid red",width:"100%"}}
      icon={checkIcon} color="teal" title="Great Buddy!" mt="md">
        Sign In Successfully
      </Notification>
    </>
  );
}