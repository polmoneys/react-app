import { useLocation } from "react-router-dom";
import { ButtonAccent } from "@/system/components/Buttons";
import { Radio } from "@/system/components/Radio";
import { GroteskXL, HelveticaNeue } from "@/system/components/Typography";
import useSearchUrl from "@/system/hooks/useSearchUrl";
import Col from "@/system/components/Col";
import { isEmptyObject } from "@/system/utils/record";
import { useEffect } from "react";

const Archive = () => {
  const [urlState, setUrlState, updateCurrentUrlState, back] = useSearchUrl();

  useEffect(() => {
    if (isEmptyObject(urlState)) return;
    // change page according to urlState ...
  }, [urlState]);

  const onSubmit = (event: any) => {
    event.preventDefault();
    const formData = new FormData(event.target);
    const newURLSearchParams = Object.fromEntries(formData);
    if (isEmptyObject(newURLSearchParams)) alert("Change some filters");
    updateCurrentUrlState(
      newURLSearchParams as Partial<Record<string, string>>
    );
  };

  return (
    <article>
      <GroteskXL>Archive</GroteskXL>

      <Col as="form" onSubmit={onSubmit}>
        <Radio.GroupFieldset name="status" gap="var(--gap-1)">
          <Radio.Fieldset
            label="Draft"
            value="draft"
            id="radio-draft"
            defaultChecked
          />
          <Radio.Fieldset label="Live" value="live" id="radio-live" />
          <Radio.Fieldset label="Unknown" value="unknown" id="radio-unknown" />
          <Radio.Fieldset
            label="Published"
            value="published"
            id="radio-published"
          />
        </Radio.GroupFieldset>

        <ButtonAccent>Apply filters to url</ButtonAccent>
      </Col>
    </article>
  );
};

export default Archive;
