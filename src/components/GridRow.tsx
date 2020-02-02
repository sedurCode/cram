import React from 'react';

export interface GridRowProps {
  label: React.ReactNode|React.ReactNode[];
  children: React.ReactNode|React.ReactNode[]
}

export default function GridRow(props: GridRowProps) {
	return (
		<>
			<div style={{ display: "grid", gridColumnStart: "1", gridColumnEnd: "2" }}>{props.label}</div>
			<div style={{ display: "grid", gridColumnStart: "2", gridColumnEnd: "3" }}>
				<div style={{ display: "flex", justifyContent: "space-evenly" }}>
					{props.children}
				</div>
			</div>
		</>
	)
}