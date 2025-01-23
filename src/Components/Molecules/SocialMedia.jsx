import auth from "../../Firebase/firebase.init";
import useAuth from "../../hooks/useAuth";
import { signInWithPopup } from "firebase/auth";
("firebase/auth");
export default function SocialMedia() {
  const { googleProvider } = useAuth();

  const SocialMediaHandler = (provider) => {
    signInWithPopup(auth, provider).then((result) => console.log(result.user));
  };

  return (
    <>
      <h2 className="text-center font-semibold">Or Sign In With</h2>
      <div className="flex items-center justify-center gap-5 ">
        <div>
          <img
            onClick={() => SocialMediaHandler(googleProvider)}
            className="cursor-pointer hover:bg-red-100 hover:text-white p-2 rounded-full"
            src="https://res.cloudinary.com/dhjkntuy2/image/upload/v1737485109/FoodVillage/others/Group_gluopv.png"
            alt="Google"
          />
        </div>
        <div>
          <img
            className="cursor-pointer hover:bg-red-100 hover:text-white p-2 rounded-full"
            src="https://res.cloudinary.com/dhjkntuy2/image/upload/v1737485109/FoodVillage/others/bx_bxl-facebook_m684ny.png"
            alt="Facebook"
          />
        </div>
        <div>
          <img
            className="cursor-pointer hover:bg-red-100 hover:text-white p-2 rounded-full"
            src="https://res.cloudinary.com/dhjkntuy2/image/upload/v1737485109/FoodVillage/others/bx_bxl-linkedin_ib0mng.png"
            alt="Linkedin"
          />
        </div>
      </div>
    </>
  );
}
