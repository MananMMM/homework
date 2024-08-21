import { useEffect, useState } from "react";
import { IUser } from "../../../helpers/types";
import { getAllFollowings } from "../../../helpers/api";
import { BASE } from "../../../helpers/default";
import { DEF } from "../../../helpers/default";
import { MDBCardBody, MDBContainer,MDBCard} from "mdb-react-ui-kit";
import { Link } from "react-router-dom";

export const Followings = () => {
  const [followings, setFollowings] = useState<IUser[]>([]);

  useEffect(() => {
    getAllFollowings().then((response) => {
      setFollowings(response.payload as IUser[]);
    });
  });
  return (
    <>
     <MDBContainer className="py-5">
      <MDBCard>
        <MDBCardBody className="p-4">
      <h3>Followings {followings.length} </h3>
      {followings.map((user) => (
        <div key={user.id}>
          <div>
            <img
              src={user.picture ? BASE + user.picture : DEF}
              width={150}
              height={150}
            />
          </div>
          <strong>
            {user.name} {user.surname} <br></br>
          </strong>
        </div>
      ))}
      </MDBCardBody>
    </MDBCard>
   </MDBContainer>
    </>
  );
};
