import TestDialog from './TestDialog.vue'
import { openVueDialog } from './utils/vuedlg'

if (!(window as any).xyxy) {
  (window as any).xyxy = 1
  openVueDialog(TestDialog)
}
