// REACT IMPORTTS
import * as AccordionPrimitive from '@radix-ui/react-accordion';
import React, { useRef } from 'react';
import { styled, keyframes } from 'atelier.design';
import { ChevronDownIcon } from '@radix-ui/react-icons';
import { Heading } from '@/system/heading';

// Main Container.div
const AccordionContainer = styled('div', {
  backgroundColor: '$translucent',
  width: '100%',
  alignItems: 'center',
  margin: 'auto',
  paddingLeft: '10px',
  paddingRight: '10px',
});

// Animation Down
const slideDown = keyframes({
  from: { height: 0 },
  to: { height: 'var(--radix-accordion-content-height)' },
});

// Animation Up
const slideUp = keyframes({
  from: { height: 'var(--radix-accordion-content-height)' },
  to: { height: 0 },
});

const StyledAccordion = styled(AccordionPrimitive.Root, {
  border: '3px solid $slate6',
  borderRadius: '19px',
  width: '100%',
  backgroundColor: '$translucent',
  boxShadow: '0 2px 8px $blackA4',
});

const StyledItem = styled(AccordionPrimitive.Item, {
  overflow: 'hidden',
  backgroundColor: '$slate1',

  '&:first-child': {
    borderTopLeftRadius: '16px',
    borderTopRightRadius: '16px',
  },

  '&:last-child': {
    borderBottomLeftRadius: '16px',
    borderBottomRightRadius: '16px',
  },

  '&:focus-within': {
    position: 'relative',
    zIndex: 1,
    boxShadow: '0 0 0 2px $mauve12',
  },
});

// Header Spacing
const StyledHeader = styled(AccordionPrimitive.Header, {
  paddingTop: '3px',
  borderRadius: '16px',
  all: 'unset',
  display: 'flex',
});

// Accordion Trigger Styles
const StyledTrigger = styled(AccordionPrimitive.Trigger, {
  all: 'unset',
  fontFamily: '$inter',
  paddingTop: '0px',
  paddingBottom: '0px',
  paddingLeft: '20px',
  paddingRight: '20px',
  height: '45px',
  flex: '1',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',
  fontSize: '13px',
  fontWeight: '700',
  lineHeight: '1',
  color: '$gray12',

  '&[data-state="closed"]': { backgroundColor: '$slate1' },
  '&[data-state="open"]': { backgroundColor: '$slate3' },
  '&:hover': { backgroundColor: '$slate5' },
});

// Dropdown Styles
const StyledContent = styled(AccordionPrimitive.Content, {
  overflow: 'hidden',
  color: '$gray12',
  backgroundColor: '$slate1',

  '&[data-state="open"]': {
    animation: `${slideDown} 300ms cubic-bezier(0.87, 0, 0.13, 1)`,
  },
  '&[data-state="closed"]': {
    animation: `${slideUp} 300ms cubic-bezier(0.87, 0, 0.13, 1)`,
  },
});

const StyledContentText = styled('div', {
  fontFamily: '$inter',
  fontSize: '12px',
  fontWeight: '500',
  padding: '25px 20px',
  lineHeight: '1.5',
  alignItems: 'left',
  textAlign: 'left',
});

const StyledChevron = styled(ChevronDownIcon, {
  color: '$lime9',
  transition: 'transform 300ms cubic-bezier(0.87, 0, 0.13, 1)',
  '[data-state=open] &': { transform: 'rotate(180deg)' },
});

// Styled Exports
export const Accordion = StyledAccordion;
export const AccordionItem = StyledItem;

// TRIGGER
const AccordionTrigger = ({ children, ...props }, ref) => {
  // Create Ref for Trigger Component
  const triggerRef = useRef(null);

  return (
    <StyledHeader>
      <StyledTrigger {...props} ref={triggerRef}>
        {children}
        <StyledChevron aria-hidden />
      </StyledTrigger>
    </StyledHeader>
  );
};

// DROPDOWN CONTENT
const AccordionContent = ({ children, ...props }, ref) => {
  // Create Ref for Content Component
  const contentRef = useRef(null);

  return (
    <StyledContent {...props} ref={contentRef}>
      <StyledContentText>{children}</StyledContentText>
    </StyledContent>
  );
};

// THE ACCORDION
export const AccordionComponent = () => {
  return (
    <>
      <AccordionContainer>
        <Heading
          size="1"
          css={{
            paddingBottom: '30px',
            fontSize: '14px',
            fontFamily: '$neuewide',
            fontWeight: '800',
            textTransform: 'uppercase',
          }}
        >
          Frequently asked
        </Heading>

        <Accordion type="single" collapsible>
          <AccordionItem value="item-1">
            <AccordionTrigger>What is Atelier Design Yield?</AccordionTrigger>
            <AccordionContent>Simply put, it's the coolest shit ever.</AccordionContent>
          </AccordionItem>

          <AccordionItem value="item-2">
            <AccordionTrigger>Is it unstyled?</AccordionTrigger>
            <AccordionContent>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et
              dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex
              ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu
              fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt
              mollit anim id est laborum.
            </AccordionContent>
          </AccordionItem>

          <AccordionItem value="item-3">
            <AccordionTrigger>Can it be animated?</AccordionTrigger>
            <AccordionContent>Yes! You can animate the Accordion with CSS or JavaScript.</AccordionContent>
          </AccordionItem>

          <AccordionItem value="item-4">
            <AccordionTrigger>Is it accessible?</AccordionTrigger>
            <AccordionContent>Yes. It adheres to the WAI-ARAI design pattern.</AccordionContent>
          </AccordionItem>
        </Accordion>
      </AccordionContainer>
    </>
  );
};
