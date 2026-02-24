import type { ComponentGroup } from '../componentTypes';
import { docsComponents } from './docs';
import { typographyComponents } from './typography';
import { formComponents } from './form';
import { dataDisplayComponents } from './dataDisplay';
import { navigationComponents } from './navigation';
import { feedbackComponents } from './feedback';
import { overlayComponents } from './overlay';
import { layoutComponents } from './layout';

export const CATEGORIZED_COMPONENTS: ComponentGroup[] = [
    docsComponents,
    typographyComponents,
    formComponents,
    dataDisplayComponents,
    navigationComponents,
    feedbackComponents,
    overlayComponents,
    layoutComponents
];

export const ALL_COMPONENTS = CATEGORIZED_COMPONENTS.flatMap((group) => group.items);



