import { type SlotRecipeConfig } from '@pandacss/dev'

import { avaterSlotRecipe } from './avater.recipe'
import { cardSlotRecipe } from './card.recipe'
import { tabsSlotRecipe } from './tabs.recipe'
import { fieldSlotRecipe } from './field.recipe'
import { clipboardSlotRecipe } from './clipboard.recipe'
import { accordionSlotRecipe } from './accordion.recipe'
import { switchSlotRecipe } from './switch.recipe'
import { tableSlotRecipe } from './table.recipe'
import { pinInputSlotRecipe } from './pinInput.recipe'
import { checkboxSlotRecipe } from './checkbox.recipe'
import { selectSlotRecipe } from './select.recipe'

export const slotRecipes: Record<string, Partial<SlotRecipeConfig>> = {
  accordionSlotRecipe,
  avaterSlotRecipe,
  cardSlotRecipe,
  checkboxSlotRecipe,
  clipboardSlotRecipe,
  fieldSlotRecipe,
  pinInputSlotRecipe,
  selectSlotRecipe,
  switchSlotRecipe,
  tabsSlotRecipe,
  tableSlotRecipe,
}
