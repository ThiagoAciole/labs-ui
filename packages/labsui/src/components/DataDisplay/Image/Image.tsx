import React, { useState } from 'react';
import './Image.css';
import { classNames } from '../../../utils/classNames';
import { Skeleton } from '../../Feedback/Skeleton/Skeleton';

interface ImageProps extends React.ImgHTMLAttributes<HTMLImageElement> {
    src: string;
    alt: string;
    objectFit?: 'cover' | 'contain' | 'fill' | 'none' | 'scale-down';
    radius?: 'none' | 'sm' | 'md' | 'lg' | 'full';
    fallback?: React.ReactNode;
}

export const Image: React.FC<ImageProps> = ({
    src,
    alt,
    objectFit = 'cover',
    radius = 'md',
    className,
    style,
    fallback,
    ...props
}) => {
    const [isLoaded, setIsLoaded] = useState(false);
    const [hasError, setHasError] = useState(false);

    if (hasError && fallback) {
        return <>{fallback}</>;
    }

    return (
        <div className={classNames('image__wrapper', className)} style={style}>
            {!isLoaded && !hasError && (
                <Skeleton
                    width="100%"
                    height="100%"
                    className={`image__skeleton image__radius--${radius}`}
                />
            )}
            <img
                src={src}
                alt={alt}
                className={classNames(
                    'image',
                    `image__fit--${objectFit}`,
                    `image__radius--${radius}`,
                    { 'image--loaded': isLoaded }
                )}
                onLoad={() => setIsLoaded(true)}
                onError={() => setHasError(true)}
                {...props}
            />
        </div>
    );
};





