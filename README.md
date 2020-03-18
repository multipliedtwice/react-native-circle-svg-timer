# react-native-circle-svg-timer

Circular Timer component for React Native based on react-native-svg

## Example

![image](/example/react-native-circle-svg-timer.gif)

## Getting Started

### Installation

```bash
npm i react-native-circle-svg-timer --save
```

### Props

| parameter     | type   | required | description                          | default         |
| :------------ | :----- | :------- | :----------------------------------- | :-------------- |
| duration      | number | no       | Time in seconds                      | `15`            |
| radius        | number | no       | Radius of the circle                 | `30`            |
| strokeWidth   | number | no       | The border width of the circle       | `10`            |
| strokeColor   | string | no       | The color of the filler border       | `"lightblue"`   |
| fillColor     | string | no       | The background color of circle       | `"transparent"` |
| strokeBgColor | string | no       | The color of the border's background | `"#grey"`       |

### Basic Usage

```javascript
import CircularTimer from 'react-native-circular-timer';

export const Example = props => {
  return <CircularTimer />;
};
```

<!--

### Methods

| method  | description                |
| :------ | :------------------------- |
| restart | To restart the timer again |

### Note:

Firstly, you need to create reference of the component and then call the restart method using that reference [GUIDE](https://stackoverflow.com/questions/37949981/call-child-method-from-parent).

### To run example

```bash
cd example
npm install
npx react-native run-android (For android)
npx react-native run-ios (For ios)
```

#### In case of any issue follow the [GUIDE](https://facebook.github.io/react-native/docs/getting-started).

### Supported React Native Versions

This project aims to support any version of React Native.

If you require new features or bug fixes for older versions you can fork this project.

### Credits

The idea for this modules came from MrToph react-native-countdown-circle package.

### Licenses

CircularTimer - MIT © MeharBhutta -->
