{- |
   Module      : Text.Pandoc.AnchorJS
   Copyright   : Copyright (C) 2019-2020 Venkateswara Rao Mandela
   License     : MIT

This Pandoc filter is inspired by AnchorJS.
It adds Anchor links to HTML headers when converting them to HTML
instead of doing it in the browser.
-}
module Text.Pandoc.AnchorJS
  ( anchorLinks
  )
where

import           Text.Pandoc
import           Text.Pandoc.Walk

-- Create an anchor based on the string
-- add anchorjs-link class for CSS manipulations
-- Use "#" as the display for the anchor
-- Append linkId to "#" to create the link target
addAnchor :: String -> Inline
addAnchor linkId = Link ("", ["anchorjs-link"], []) [Str " #"] ("#" ++ linkId, "")

-- Add a anchor link to each html header
-- Leave everything else as is
modHeader :: Block -> Block

-- We are matching against the header pattern from pandoc-types
-- We take the linkId and use it to add anchor links
--         Header Int Attr [Inline]
modHeader (Header n y@(linkId, _, _) xs) = (Header n y (xs ++ [(addAnchor linkId)]))
-- fallback for all others
modHeader x                              = x

-- Walk the Pandoc AST and apply modHeader on each node
anchorLinks :: Pandoc -> Pandoc
anchorLinks = walk modHeader
