import { describe, it, expect } from 'vitest';
import { cn } from './index';

describe('cn', () => {
  it('merges class names correctly', () => {
    expect(cn('bg-red-500', 'text-white')).toBe('bg-red-500 text-white');
  });

  it('handles conditional class names', () => {
    expect(cn('bg-red-500', { 'text-white': true })).toBe(
      'bg-red-500 text-white'
    );
    expect(cn('bg-red-500', { 'text-white': false })).toBe('bg-red-500');
  });

  it('handles conflicting class names', () => {
    expect(cn('bg-red-500', 'bg-blue-500')).toBe('bg-blue-500');
  });
});
