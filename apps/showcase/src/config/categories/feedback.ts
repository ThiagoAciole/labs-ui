import type { ComponentGroup } from '../componentTypes';
import ToastPage from '../../pages/Feedback/ToastPage';
import LoaderPage from '../../pages/Feedback/LoaderPage';
import ProgressPage from '../../pages/Feedback/ProgressPage';
import SkeletonPage from '../../pages/Feedback/SkeletonPage';

export const feedbackComponents: ComponentGroup = {
    title: 'Feedback',
    icon: 'message-square',
    items: [
        { id: 'toast', name: 'Toast', icon: 'message-square', component: ToastPage },
        { id: 'loader', name: 'Loader', icon: 'loader2', component: LoaderPage },
        { id: 'progress', name: 'Progress', icon: 'activity', component: ProgressPage },
        { id: 'skeleton', name: 'Skeleton', icon: 'component', component: SkeletonPage }
    ]
};



