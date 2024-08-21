import { useEffect, useState } from "react";
import { getAllFollowers } from "../../../helpers/api";
import { IUser } from "../../../helpers/types";
import { BASE, DEF } from "../../../helpers/default";
import { MDBCard, MDBContainer,MDBCardBody} from "mdb-react-ui-kit";


export const Followers = () => {
  const [followers, setFollowers] = useState<IUser[]>([]);

  useEffect(() => {
    getAllFollowers().then((response) => {
      setFollowers(response.payload as IUser[]);
    });
  });

  return (
    <>
     <MDBContainer className="py-5">
      <MDBCard>
        <MDBCardBody className="p-4">
      <h3>Followers {followers.length}</h3>
      {followers.map((user) => (
        <div key={user.id}>
          <div>
            <img
              src={user.picture ? BASE + user.picture : DEF}
              width={150}
              height={150}
            />
          </div>
          <strong>
            {user.name} {user.surname}
          </strong>
        </div>
      ))}
      
      </MDBCardBody>
      </MDBCard>
      </MDBContainer>
    </>
  );
};
