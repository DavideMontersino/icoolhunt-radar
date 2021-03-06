var defaultConfig = {
	width: '600',
	height: '400',
	radarHandlersRadius: 5, // the radius of the circles used to drag the values
	minRadius: 20, // the minimum radius from which the radar starts
	radarPathInterpolation: "linear-closed",
	maxValue: 100,
	radarMargin: 0.1, // how much margin from data max value and end of radar grid
	exponent: 2, // 1 to use a linear scale; otherwise, a pow() scale will be used
	grid: 0, //in how many sectors should grid be divided
	axeLabelsSpace: 2, // the space between axes text and the concentric grid circles
	equalize: true, //if true, changing one value will result in all other to decrease (and vice-versa), in order to mantain a constant sum
	showAxeLabels: true,
	labelPosition: 'outer', // inner, outer or none
	showValuesOnLabels: true,
	showValuesOnTooltip: true,
	showToolTip: true,
	measureUnit: "%", //measure unit to append to labels
	decimalValues: 0, // decimal values to be showed in labels
	editable: true,
	zoomOnMaxValue: false,
	element: '.radar'
};