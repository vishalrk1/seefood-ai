import { useState } from "react";
import { IMG_GPT_TASK } from "../redux/constants";
import ServiceChip from "../components/serviceChip";
import { MessageSquareText } from "lucide-react";
import EnterButton from "../components/buttons/EnterButton";
import { useSelector } from "react-redux";
import { RootState } from "../redux/store";
import RequiredCredits from "../components/RequiredCredits";

const ImageSection = () => {
  const [taskName, setTaskName] = useState(IMG_GPT_TASK);
  const { user } = useSelector((state: RootState) => state.auth);
  
  return (
    <section className="mt-16 w-full max-w-xl">
      <div className="flex flex-col w-full gap-2">
        <ServiceChip taskName={taskName} setTaskName={setTaskName} />
        <form
          className="relative flex flex-col justify-center items-center"
          autoCapitalize="off"
          autoComplete="off"
          noValidate
        >
          {taskName === IMG_GPT_TASK ? (
            <input
              name="fieldField"
              type="file"
              placeholder="Paste the Article Link"
              title="Paste the Article Link"
              className="file_input peer"
              required
            />
          ) : (
            <>
              <MessageSquareText className="absolute left-0 my-2 ml-3 w-5 text-gray-700" />
              <input
                name="fieldField"
                type="text"
                placeholder="Enter Food Name"
                title="Paste the Image Link"
                className="url_input peer"
                required
              />
            </>
          )}
          <EnterButton />
        </form>
        <RequiredCredits taskName={taskName}/>
      </div>
    </section>
  );
};

export default ImageSection;
