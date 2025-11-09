import type { RecipeConfig, RecipeVariantRecord } from '@pandacss/dev'

import { buttonRecipe } from './button.recipe'
import { spinnerRecipe } from './spinner.recipe'
import { paperRecipe } from './paper.recipe'
import { skeletonRecipe } from './skeleton.recipe'
import { toastRecipe } from './toast.recipe'
import { inputRecipe } from './input.recipe'
import { kbdRecipe } from './kbd.recipe'
import { textareaRecipe } from './textarea.recipe'
import { commandInputRecipe } from './command-Input.recipe'
import { badgeRecipes } from './bagde.recipe'
import { groupRecipe } from './group.recipe'
import { floatLabelRecipe } from './float-label.recipe'
import { inputGroupRecipe } from './input.group'
import { inputAddonRecipe } from './input-addon.recipe'
import { headingRecipe } from './heading.recipe'
import { textRecipe } from './text.recipe'

export const recipes: Record<
  string,
  Partial<RecipeConfig<RecipeVariantRecord>>
> = {
  badge: badgeRecipes,
  button: buttonRecipe,
  commandInput: commandInputRecipe,
  floatLabel: floatLabelRecipe,
  heading: headingRecipe,
  group: groupRecipe,
  input: inputRecipe,
  inputGroup: inputGroupRecipe,
  inputAddon: inputAddonRecipe,
  kbd: kbdRecipe,
  spinner: spinnerRecipe,
  paper: paperRecipe,
  skeleton: skeletonRecipe,
  toast: toastRecipe,
  text: textRecipe,
  textarea: textareaRecipe,
}
