import { type SlotRecipeConfig } from '@pandacss/dev'

import { avatarSlotRecipe } from './avatar.recipe'
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
import { dialogSlotRecipe } from './dialog.recipe'

export const slotRecipes: Record<string, Partial<SlotRecipeConfig>> = {
  accordion: accordionSlotRecipe,
  avatar: avatarSlotRecipe,
  card: cardSlotRecipe,
  checkbox: checkboxSlotRecipe,
  clipboard: clipboardSlotRecipe,
  dialog: dialogSlotRecipe,
  field: fieldSlotRecipe,
  pinInput: pinInputSlotRecipe,
  switchRecipe: switchSlotRecipe,
  tabs: tabsSlotRecipe,
  table: tableSlotRecipe,
  select: selectSlotRecipe,
}
