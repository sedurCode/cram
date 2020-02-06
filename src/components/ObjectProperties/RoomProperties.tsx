import React from "react";
import TextInput from "../TextInput";
import NumberInput, { ObjectPropertyInputEvent } from "../NumberInput";
import CheckboxInput from "../CheckboxInput";
import Source from '../../objects/source';
import GridRow from '../GridRow';
import Room from '../../objects/room';

export interface RoomPropertiesProps {
  object: Room;
  onPropertyChange: (e: ObjectPropertyInputEvent) => void;
  onPropertyValueChangeAsNumber: (
    id: string,
    prop: string,
    valueAsNumber: number
  ) => void;
  onPropertyValueChangeAsString: (
    id: string,
    prop: string,
    valueAsString: string
  ) => void;
}



const RoomPropertiesContainerStyle: React.CSSProperties = {
	display: "grid",
	gridTemplateColumns: "auto auto",
	padding: ".25em",
	gridRowGap: ".25em",
	gridColumnGap: ".25em"
};


export default function RoomProperties(props: RoomPropertiesProps) {

	const XYZProps = {
    style: {
		  width: "30%"
	  },
    onChange: props.onPropertyChange
	}
	
	
	return (
		<div>
			<div style={RoomPropertiesContainerStyle}>
				
				{props.object.hasOwnProperty('name') && (
					<GridRow label={"name"}>
						<TextInput name="name" value={props.object.name} onChange={props.onPropertyChange} />
					</GridRow>
				)}
				
				{props.object.hasOwnProperty('visible') && (
					<GridRow label={"visible"}>
						<CheckboxInput name="visible" checked={props.object.visible} onChange={props.onPropertyChange} />
					</GridRow>
				)}
				{props.object.boundingBoxHelper.hasOwnProperty('visible') && (
					<GridRow label={"bounding box"}>
						<CheckboxInput name="showBoundingBox" checked={props.object.boundingBoxHelper.visible} onChange={props.onPropertyChange} />
					</GridRow>
				)}
				
				{props.object.hasOwnProperty('position') && (
					<GridRow label={"position"}>
						<NumberInput name="x" value={props.object.position.x} {...XYZProps}/>
						<NumberInput name="y" value={props.object.position.y} {...XYZProps}/>
						<NumberInput name="z" value={props.object.position.z} {...XYZProps}/>
					</GridRow>
				)}

				{props.object.hasOwnProperty('scale') && (
					<GridRow label={"scale"}>
						<NumberInput name="scalex" value={props.object.scale.x} {...XYZProps}/>
						<NumberInput name="scaley" value={props.object.scale.y} {...XYZProps}/>
						<NumberInput name="scalez" value={props.object.scale.z} {...XYZProps} />
					</GridRow>
				)}

				{props.object.hasOwnProperty('rotation') && (
					<GridRow label={"rotation"}>
						<NumberInput name="rotationx" value={props.object.rotation.x} {...XYZProps}/>
						<NumberInput name="rotationy" value={props.object.rotation.y} {...XYZProps}/>
						<NumberInput name="rotationz" value={props.object.rotation.z} {...XYZProps}/>
					</GridRow>
				)}
			</div>
		</div>
	);
}
