import { Suspense, ComponentType } from 'react'
import LoadingPage from '@/components/loadingPage'

const withSuspense = <P extends object>(
    Component: ComponentType<P>
): ComponentType<P> => (props: P) => (
    <Suspense fallback={<LoadingPage />}>
        <Component {...props} />
    </Suspense>
);

export default withSuspense;
