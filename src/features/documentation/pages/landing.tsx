import { useRef, useState } from "react";
import {
  Grotesk,
  HelveticaNeue,
  HelveticaNeueBold,
  HelveticaNeueBoldS,
  HelveticaNeueBoldXL,
  HelveticaNeueMedium,
  HelveticaNeueThin,
  GroteskXL,
} from "@/system/components/Typography";
import {
  IconPlus,
  IconMinus,
  IconCross,
  IconCheck,
  IconDash,
  IconSlash,
  IconCaretUp,
  IconCaretDown,
  IconDotsX,
  IconDotsY,
  IconIg,
  IconStar,
  IconTwitter,
  IconGithub,
  IconQuestion,
  IconBookmark,
  IconEmail,
  IconHeart,
  IconPin,
  IconColorPicker,
} from "@/system/components/Icons";
import Card from "@/system/components/Card";
import Row from "@/system/components/Row";
import Col from "@/system/components/Col";
import Grid from "@/system/components/Grid";
import Pair from "@/system/components/Pair";
import useLeader from "@/system/hooks/useLeader";
import { Checkbox, Switch } from "@/system/components/Checkbox";
import { Radio } from "@/system/components/Radio";
import useFormEnter from "@/system/hooks/useFormEnter";
import useFormLeave from "@/system/hooks/useFormLeave";
import { ButtonAccent } from "@/system/components/Button";

type StatusMachine = "draft" | "live" | "unknown" | "published";

const Br = () => <br aria-hidden="true" />;

const Docs = () => {
  const handleKeyDown = (event: React.KeyboardEvent) => {
    if (event.key === "Enter") {
      event.preventDefault();
    }
  };

  const [{ output, all, mixed }, { onFollowerChange, onLeadChange }] =
    useLeader({
      mayo: false,
      mustard: true,
      ketchup: false,
    });

  const [publishStatus, setStatus] = useState<StatusMachine>("draft");

  const onSwitch = (value: boolean) => console.log({ value });
  const input = useRef<HTMLInputElement>(null);

  useFormEnter(() => {
    if (input.current) {
      input.current.focus();
    }
  });

  useFormLeave("form-id", () =>
    alert("Form is not submitted, is that what you want ?")
  );

  return (
    <article>
      <GroteskXL>Docs</GroteskXL>
      <Grid as="div" size="md" className="gap:xl">
        <Card ratio="auto" as="div">
          <Row as="div" gap="var(--gap-3)" size="100%">
            <Pair as="div">
              <HelveticaNeue>
                <IconHeart label="Like it" />
              </HelveticaNeue>
              <HelveticaNeue className="pair-last">React</HelveticaNeue>
            </Pair>
            <Pair as="div" className="pair-shortened ml:auto">
              <HelveticaNeue>
                <IconHeart label="Like it" />
              </HelveticaNeue>
              <HelveticaNeue className="pair-last">React</HelveticaNeue>
            </Pair>
          </Row>
        </Card>
        <Card as="div" ratio="auto">
          <Col as="div">
            <Switch
              onChangeBoolean={onSwitch}
              label={<HelveticaNeue>Joyful</HelveticaNeue>}
              id="test-switch"
              initial={false}
            />
          </Col>
        </Card>
        <Card ratio="auto" as="div">
          <Col as="div" gap="var(--gap-1)">
            <Checkbox
              isMixed={mixed === "mixed"}
              checked={mixed !== "mixed" && mixed === true}
              label={
                mixed === "mixed" ? (
                  <HelveticaNeue> Some </HelveticaNeue>
                ) : all ? (
                  <HelveticaNeue> All</HelveticaNeue>
                ) : (
                  <HelveticaNeue> None</HelveticaNeue>
                )
              }
              name="parent"
              value="parent"
              id="parent-checkbox-test"
              onChange={ev => onLeadChange()}
            />

            {Object.entries(output).map(([value, state]) => (
              <Checkbox
                key={value}
                name={value.toString()}
                label={value.toString()}
                id={`${value.toString()}-test-checkbox`}
                checked={state as boolean}
                value={value}
                onChange={ev => onFollowerChange(ev)}
              />
            ))}
          </Col>
        </Card>
        <Card as="div" ratio="auto">
          <div>
            <Radio.Group
              initial={publishStatus}
              onChange={(selection: string) =>
                setStatus(selection as StatusMachine)
              }
              gap="var(--gap-1)"
              renderLabel={({
                checked,
                radioLabel,
              }: {
                checked: boolean;
                radioLabel: string;
              }) => (
                <Pair as="div">
                  {checked ? (
                    <IconCheck label="checked" size="lg" />
                  ) : (
                    <IconCross label="unchecked" size="lg" />
                  )}
                  {radioLabel}
                </Pair>
              )}
            >
              <Radio.Label
                name="draft"
                value="draft"
                id="radio-draft"
                // classNames={{
                //   group: "color-accent",
                //   input: "color-accent",
                //   checked: "color-accent",
                // }}
                width="calc(50% - var(--gap-1)"
              />
              <Radio.Label
                name="live"
                value="live"
                id="radio-live"
                width="calc(50% - var(--gap-1)"
              />
              <Radio.Label
                name="unknown"
                value="unknown"
                id="radio-unknown"
                width="calc(25% - var(--gap-1)"
              />
              <Radio.Label
                name="published"
                value="published"
                id="radio-published"
                width="calc(75% - var(--gap-1)"
              />
            </Radio.Group>
          </div>
        </Card>
        <Card as="div" ratio="auto">
          <Radio.Group
            initial={publishStatus}
            onChange={(selection: string) =>
              setStatus(selection as StatusMachine)
            }
            gap="var(--gap-1)"
          >
            <Radio
              name="draft"
              value="draft"
              id="radio-draft"
              // classNames={{
              //   group: "color-error",
              //   input: "color-error",
              //   checked: "color-error",
              // }}
            />
            <Radio name="live" value="live" id="radio-live" />
            <Radio name="unknown" value="unknown" id="radio-unknown" />
            <Radio name="published" value="published" id="radio-published" />
          </Radio.Group>
        </Card>
        <Card as="div" ratio="auto">
          <Col as="div" gap="var(--gap-1)">
            <form
              id="form-id"
              // onsubmit="submit.disabled = true"
            >
              <label htmlFor="input-id">Label</label>
              <input
                ref={input}
                onKeyDown={handleKeyDown}
                id="input-id"
                type="text"
                placeholder="text"
                defaultValue=""
              />
            </form>
            <button type="submit" form="form-id">
              Submit
            </button>
          </Col>
        </Card>

        <div>
          <Card as="div" ratio="auto">
            <Card.Title>Font family Factory</Card.Title>

            <Col as="div">
              <Grotesk>Aa aa AA</Grotesk>

              <HelveticaNeueThin>Aa aa AA</HelveticaNeueThin>
              <HelveticaNeue>Aa aa AA</HelveticaNeue>
              <HelveticaNeueMedium>Aa aa AA</HelveticaNeueMedium>
              <HelveticaNeueBold>Aa aa AA</HelveticaNeueBold>
            </Col>
          </Card>
        </div>
        <div>
          <Card as="div" ratio="auto">
            <Card.Title>Font size Factory</Card.Title>
            <Col as="div">
              <GroteskXL>Aa aa AA</GroteskXL>

              <HelveticaNeue>Aa aa AA</HelveticaNeue>
              <HelveticaNeueBoldS>Aa aa AA</HelveticaNeueBoldS>
              <HelveticaNeueBoldXL>Aa aa AA</HelveticaNeueBoldXL>
              <HelveticaNeueBold>Aa aa AA</HelveticaNeueBold>
              <HelveticaNeueThin>Aa aa AA</HelveticaNeueThin>
            </Col>
          </Card>
        </div>
        <div>
          <Card as="div" ratio="auto">
            <Card.Title>Icon Factory</Card.Title>

            <Row as="div" options={{ wrap: "wrap" }}>
              <IconBookmark stroke={"var(--accent)"} size="sm" label="" />
              <IconCaretDown stroke={"var(--accent)"} size="sm" label="" />
              <IconCaretUp stroke={"var(--accent)"} size="sm" label="" />
              <IconCheck stroke={"var(--accent)"} size="sm" label="" />
              <IconCross stroke={"var(--accent)"} size="sm" label="" />
              <IconHeart stroke={"var(--accent)"} size="sm" label="" />
              <IconTwitter stroke={"var(--accent)"} size="sm" label="" />

              <IconBookmark stroke={"var(--accent)"} label="" />
              <IconCaretDown stroke={"var(--accent)"} label="" />
              <IconCaretUp stroke={"var(--accent)"} label="" />
              <IconCheck stroke={"var(--accent)"} label="" />
              <IconCross stroke={"var(--accent)"} label="" />
              <IconHeart stroke={"var(--accent)"} label="" />
              <IconTwitter stroke={"var(--accent)"} label="" />

              <IconBookmark stroke={"var(--accent)"} size="lg" label="" />
              <IconCaretDown stroke={"var(--accent)"} size="lg" label="" />
              <IconCaretUp stroke={"var(--accent)"} size="lg" label="" />
              <IconCheck stroke={"var(--accent)"} size="lg" label="" />
              <IconCross stroke={"var(--accent)"} size="lg" label="" />
              <IconHeart stroke={"var(--accent)"} size="lg" label="" />
              <IconTwitter stroke={"var(--accent)"} size="lg" label="" />
            </Row>
            <Card.Actions>
              <HelveticaNeueMedium className="mr:auto">
                Footer something
              </HelveticaNeueMedium>
              <ButtonAccent>Action something</ButtonAccent>
            </Card.Actions>
          </Card>
        </div>
      </Grid>
    </article>
  );
};

export default Docs;
