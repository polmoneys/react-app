import { FormEvent, useEffect } from "react";
import { useLocation } from "react-router-dom";
import { ButtonSuccess } from "@/system/components/Buttons";
import { Radio } from "@/system/components/Radios";
import {
  GroteskXL,
  HelveticaNeue,
  HelveticaNeueBold,
} from "@/system/components/Typography";
import useSearchUrl from "@/system/hooks/useSearchUrl";
import Col from "@/system/components/Col";
import Grid from "@/system/components/Grid";
import { Card, CardPortraitError } from "@/system/components/Cards";
import { IconTwitter } from "@/system/components/Icons";
import { isEmptyObject } from "@/system/utils/record";
import { Lorem, LoremMD } from "@/system/components/Core/Font/utils";

const Archive = () => {
  const [urlState, setUrlState, updateCurrentUrlState, back] = useSearchUrl();

  useEffect(() => {
    if (isEmptyObject(urlState)) return;
    // change page according to urlState as in Radio's defaultChecked prop...
  }, [urlState]);

  const onSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const formData = new FormData(event.currentTarget);
    const newURLSearchParams = Object.fromEntries(formData);
    if (isEmptyObject(newURLSearchParams)) alert("Change some filters");
    updateCurrentUrlState(
      newURLSearchParams as Partial<Record<string, string>>
    );
  };

  return (
    <Col as="article" gap="var(--gap-3)">
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

        <ButtonSuccess>Apply filters to url</ButtonSuccess>
      </Col>

      <Grid size="xs" as="div" className="gap:sm">
        {[...Array(12)].map((k, v) => {
          if (v === 6)
            return (
              <CardPortraitError as="div" key={v}>
                <Card.Title>
                  <HelveticaNeueBold> Nº {v} </HelveticaNeueBold>
                </Card.Title>
                <div>
                  <HelveticaNeue>{LoremMD}</HelveticaNeue>
                </div>
              </CardPortraitError>
            );
          return (
            <Card as="div" key={v} className="dimmed" ratio="portrait">
              <Card.Title>
                <HelveticaNeueBold> Nº {v} </HelveticaNeueBold>
              </Card.Title>
              <div>
                <HelveticaNeue>{LoremMD}</HelveticaNeue>
              </div>
            </Card>
          );
        })}
      </Grid>
    </Col>
  );
};

export default Archive;
