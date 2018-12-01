declare module "react-native-autocomplete-select" {
  import React from "react";
  export default class Autoselect extends React.Component<{
    suggestions?: Array<{ text: string }>;
    value?: string;
    minimumSimilarityScore?: number;
    comparationFuzziness?: number;
    suggestionObjectTextProperty?: string;
    onChangeText?: (suggestion: string) => void;
    onSelect: (suggestion: string) => void;
    suggestionsWrapperStyle?: any;
    suggestionStyle?: any;
    suggestionTextStyle?: any;
    style?: any;
    inputStyle?: any;
  }> {}
}
