interface SelectProps {
  /**
   * `options` should be an array
   * of objects which contain the keys:
   *
   * `value`: value of the option
   * `label`: user facing label for the option
   */
  options: Array<{
    value: string;
    label: string;
  }>;
  /**
   * `onChange` should be a method which gets
   * passed to `Select` in order to connect it to
   * the parent's state. There shoule be a single arg
   * which is used to set state in the parent for
   * the same value which will be passed back to
   * `Select` as `selectedOption`
   */
  onChange: (selectedOption: any) => any;

  /**
   * `value` is the associated value in the parent
   * component's state and is controlled by the `handleChange`
   * method
   */
  value: any;
}

export { SelectProps };
