export const customCssDark = `

        .swagger-ui .models {
            display: none;
        }
        html {
            background-color: #181a1b !important;
        }
        html {
            color-scheme: dark !important;
        }
        html, body {
            background-color: #181a1b;
        }
        html, body {
            border-color: #736b5e;
            color: #e8e6e3;
        }
        a {
            color: #3391ff;
        }
        table {
            border-color: #545b5e;
        }
        ::placeholder {
            color: #b2aba1;
        }
        input:-webkit-autofill,
        textarea:-webkit-autofill,
        select:-webkit-autofill {
            background-color: #404400 !important;
            color: #e8e6e3 !important;
        }
        ::-webkit-scrollbar {
            background-color: #202324;
            color: #aba499;
        }
        ::-webkit-scrollbar-thumb {
            background-color: #454a4d;
        }
        ::-webkit-scrollbar-thumb:hover {
            background-color: #575e62;
        }
        ::-webkit-scrollbar-thumb:active {
            background-color: #484e51;
        }
        ::-webkit-scrollbar-corner {
            background-color: #181a1b;
        }
        * {
            scrollbar-color: #454a4d #202324;
        }
        ::selection {
            background-color: #004daa !important;
            color: #e8e6e3 !important;
        }
        ::-moz-selection {
            background-color: #004daa !important;
            color: #e8e6e3 !important;
        }

        /* Invert Style */
        .jfk-bubble.gtx-bubble, .captcheck_answer_label > input + img, span#closed_text > img[src^="https://www.gstatic.com/images/branding/googlelogo"], span[data-href^="https://www.hcaptcha.com/"] > #icon, #bit-notification-bar-iframe, ::-webkit-calendar-picker-indicator {
            filter: invert(100%) hue-rotate(180deg) contrast(90%) !important;
        }

        /* Variables Style */
        :root {
        --darkreader-neutral-background: #131516;
        --darkreader-neutral-text: #d8d4cf;
        --darkreader-selection-background: #004daa;
        --darkreader-selection-text: #e8e6e3;
        }

        /* Modified CSS */
        .swagger-ui {
            color: rgb(188, 182, 173);
        }
        .swagger-ui a {
            background-color: transparent;
        }
        .swagger-ui abbr[title] {
            border-bottom-color: currentcolor;
            text-decoration-color: currentcolor;
        }
        .swagger-ui mark {
            background-color: rgb(153, 153, 0);
            color: rgb(232, 230, 227); 
        }
        .swagger-ui [type="button"]:focus-visible, .swagger-ui [type="reset"]:focus-visible, .swagger-ui [type="submit"]:focus-visible,
        .swagger-ui button:focus-visible {
            outline-color: rgb(140, 130, 115);
        }
        .swagger-ui legend {
            color: inherit;
        }
        .swagger-ui .debug * {
            outline-color: rgb(179, 151, 0);
        }
        .swagger-ui .debug-white * {
            outline-color: rgb(48, 52, 54);
        }
        .swagger-ui .debug-black * {
            outline-color: rgb(140, 130, 115);
        }
        .swagger-ui .debug-grid {
            background-color: transparent;
            background-image: url("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAICAYAAADED76LAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyhpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuNi1jMTExIDc5LjE1ODMyNSwgMjAxNS8wOS8xMC0wMToxMDoyMCAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wTU09Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9tbS8iIHhtbG5zOnN0UmVmPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvc1R5cGUvUmVzb3VyY2VSZWYjIiB4bWxuczp4bXA9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC8iIHhtcE1NOkRvY3VtZW50SUQ9InhtcC5kaWQ6MTRDOTY4N0U2N0VFMTFFNjg2MzZDQjkwNkQ4MjgwMEIiIHhtcE1NOkluc3RhbmNlSUQ9InhtcC5paWQ6MTRDOTY4N0Q2N0VFMTFFNjg2MzZDQjkwNkQ4MjgwMEIiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENDIDIwMTUgKE1hY2ludG9zaCkiPiA8eG1wTU06RGVyaXZlZEZyb20gc3RSZWY6aW5zdGFuY2VJRD0ieG1wLmlpZDo3NjcyQkQ3NjY3QzUxMUU2QjJCQ0UyNDA4MTAwMjE3MSIgc3RSZWY6ZG9jdW1lbnRJRD0ieG1wLmRpZDo3NjcyQkQ3NzY3QzUxMUU2QjJCQ0UyNDA4MTAwMjE3MSIvPiA8L3JkZjpEZXNjcmlwdGlvbj4gPC9yZGY6UkRGPiA8L3g6eG1wbWV0YT4gPD94cGFja2V0IGVuZD0iciI/PsBS+GMAAAAjSURBVHjaYvz//z8DLsD4gcGXiYEAGBIKGBne//fFpwAgwAB98AaF2pjlUQAAAABJRU5ErkJggg==");
        }
        .swagger-ui .debug-grid-16 {
            background-color: transparent;
            background-image: url("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyhpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuNi1jMTExIDc5LjE1ODMyNSwgMjAxNS8wOS8xMC0wMToxMDoyMCAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wTU09Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9tbS8iIHhtbG5zOnN0UmVmPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvc1R5cGUvUmVzb3VyY2VSZWYjIiB4bWxuczp4bXA9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC8iIHhtcE1NOkRvY3VtZW50SUQ9InhtcC5kaWQ6ODYyRjhERDU2N0YyMTFFNjg2MzZDQjkwNkQ4MjgwMEIiIHhtcE1NOkluc3RhbmNlSUQ9InhtcC5paWQ6ODYyRjhERDQ2N0YyMTFFNjg2MzZDQjkwNkQ4MjgwMEIiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENDIDIwMTUgKE1hY2ludG9zaCkiPiA8eG1wTU06RGVyaXZlZEZyb20gc3RSZWY6aW5zdGFuY2VJRD0ieG1wLmlpZDo3NjcyQkQ3QTY3QzUxMUU2QjJCQ0UyNDA4MTAwMjE3MSIgc3RSZWY6ZG9jdW1lbnRJRD0ieG1wLmRpZDo3NjcyQkQ3QjY3QzUxMUU2QjJCQ0UyNDA4MTAwMjE3MSIvPiA8L3JkZjpEZXNjcmlwdGlvbj4gPC9yZGY6UkRGPiA8L3g6eG1wbWV0YT4gPD94cGFja2V0IGVuZD0iciI/PvCS01IAAABMSURBVHjaYmR4/5+BFPBfAMFm/MBgx8RAGWCn1AAmSg34Q6kBDKMGMDCwICeMIemF/5QawEipAWwUhwEjMDvbAWlWkvVBwu8vQIABAEwBCph8U6c0AAAAAElFTkSuQmCC");
        }
        .swagger-ui .debug-grid-8-solid {
            background-color: rgb(24, 26, 27);
            background-image: url("data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIiB3aWR0aD0iOCIgaGVpZ2h0PSI4Ij48ZGVmcz48ZmlsdGVyIGlkPSJkYXJrcmVhZGVyLWltYWdlLWZpbHRlciI+PGZlQ29sb3JNYXRyaXggdHlwZT0ibWF0cml4IiB2YWx1ZXM9IjAuMzMzIC0wLjY2NyAtMC42NjcgMC4wMDAgMS4wMDAgLTAuNjY3IDAuMzMzIC0wLjY2NyAwLjAwMCAxLjAwMCAtMC42NjcgLTAuNjY3IDAuMzMzIDAuMDAwIDEuMDAwIDAuMDAwIDAuMDAwIDAuMDAwIDEuMDAwIDAuMDAwIiAvPjwvZmlsdGVyPjwvZGVmcz48aW1hZ2Ugd2lkdGg9IjgiIGhlaWdodD0iOCIgZmlsdGVyPSJ1cmwoI2RhcmtyZWFkZXItaW1hZ2UtZmlsdGVyKSIgeGxpbms6aHJlZj0iZGF0YTppbWFnZS9qcGVnO2Jhc2U2NCwvOWovNFFBWVJYaHBaZ0FBU1VrcUFBZ0FBQUFBQUFBQUFBQUFBUC9zQUJGRWRXTnJlUUFCQUFRQUFBQUFBQUQvNFFNeGFIUjBjRG92TDI1ekxtRmtiMkpsTG1OdmJTOTRZWEF2TVM0d0x3QThQM2h3WVdOclpYUWdZbVZuYVc0OUl1Kzd2eUlnYVdROUlsYzFUVEJOY0VObGFHbEllbkpsVTNwT1ZHTjZhMk01WkNJL1BpQThlRHA0YlhCdFpYUmhJSGh0Ykc1ek9uZzlJbUZrYjJKbE9tNXpPbTFsZEdFdklpQjRPbmh0Y0hSclBTSkJaRzlpWlNCWVRWQWdRMjl5WlNBMUxqWXRZekV4TVNBM09TNHhOVGd6TWpVc0lESXdNVFV2TURrdk1UQXRNREU2TVRBNk1qQWdJQ0FnSUNBZ0lDSStJRHh5WkdZNlVrUkdJSGh0Ykc1ek9uSmtaajBpYUhSMGNEb3ZMM2QzZHk1M015NXZjbWN2TVRrNU9TOHdNaTh5TWkxeVpHWXRjM2x1ZEdGNExXNXpJeUkrSUR4eVpHWTZSR1Z6WTNKcGNIUnBiMjRnY21SbU9tRmliM1YwUFNJaUlIaHRiRzV6T25odGNEMGlhSFIwY0RvdkwyNXpMbUZrYjJKbExtTnZiUzk0WVhBdk1TNHdMeUlnZUcxc2JuTTZlRzF3VFUwOUltaDBkSEE2THk5dWN5NWhaRzlpWlM1amIyMHZlR0Z3THpFdU1DOXRiUzhpSUhodGJHNXpPbk4wVW1WbVBTSm9kSFJ3T2k4dmJuTXVZV1J2WW1VdVkyOXRMM2hoY0M4eExqQXZjMVI1Y0dVdlVtVnpiM1Z5WTJWU1pXWWpJaUI0YlhBNlEzSmxZWFJ2Y2xSdmIydzlJa0ZrYjJKbElGQm9iM1J2YzJodmNDQkRReUF5TURFMUlDaE5ZV05wYm5SdmMyZ3BJaUI0YlhCTlRUcEpibk4wWVc1alpVbEVQU0o0YlhBdWFXbGtPa0l4TWpJME9UY3pOamRDTXpFeFJUWkNNa0pEUlRJME1EZ3hNREF5TVRjeElpQjRiWEJOVFRwRWIyTjFiV1Z1ZEVsRVBTSjRiWEF1Wkdsa09rSXhNakkwT1RjME5qZENNekV4UlRaQ01rSkRSVEkwTURneE1EQXlNVGN4SWo0Z1BIaHRjRTFOT2tSbGNtbDJaV1JHY205dElITjBVbVZtT21sdWMzUmhibU5sU1VROUluaHRjQzVwYVdRNlFqRXlNalE1TnpFMk4wSXpNVEZGTmtJeVFrTkZNalF3T0RFd01ESXhOekVpSUhOMFVtVm1PbVJ2WTNWdFpXNTBTVVE5SW5odGNDNWthV1E2UWpFeU1qUTVOekkyTjBJek1URkZOa0l5UWtORk1qUXdPREV3TURJeE56RWlMejRnUEM5eVpHWTZSR1Z6WTNKcGNIUnBiMjQrSUR3dmNtUm1PbEpFUmo0Z1BDOTRPbmh0Y0cxbGRHRStJRHcvZUhCaFkydGxkQ0JsYm1ROUluSWlQejcvN2dBT1FXUnZZbVVBWk1BQUFBQUIvOXNBaEFBYkdob3BIU2xCSmlaQlFpOHZMMEpIUHo0K1AwZEhSMGRIUjBkSFIwZEhSMGRIUjBkSFIwZEhSMGRIUjBkSFIwZEhSMGRIUjBkSFIwZEhSMGRIUjBkSEFSMHBLVFFtTkQ4b0tEOUhQelUvUjBkSFIwZEhSMGRIUjBkSFIwZEhSMGRIUjBkSFIwZEhSMGRIUjBkSFIwZEhSMGRIUjBkSFIwZEhSMGRIUjBkSFIwZi93QUFSQ0FBSUFBZ0RBU0lBQWhFQkF4RUIvOFFBV1FBQkFRQUFBQUFBQUFBQUFBQUFBQUFBQUFZQkFRRUFBQUFBQUFBQUFBQUFBQUFBQUFJRUVBRUJBQU1CQUFBQUFBQUFBQUFBQUFBQkFERUNBMEVSQUFFREJRQUFBQUFBQUFBQUFBQUFBQUFSSVRGQlVXRVNJdi9hQUF3REFRQUNFUU1SQUQ4QW9PblRWMVFURDdKSnNoUDN2U00zUC8vWiIgLz48L3N2Zz4=");
        }
        .swagger-ui .debug-grid-16-solid {
            background-color: rgb(24, 26, 27);
            background-image: url("data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIiB3aWR0aD0iMTYiIGhlaWdodD0iMTYiPjxkZWZzPjxmaWx0ZXIgaWQ9ImRhcmtyZWFkZXItaW1hZ2UtZmlsdGVyIj48ZmVDb2xvck1hdHJpeCB0eXBlPSJtYXRyaXgiIHZhbHVlcz0iMC4zMzMgLTAuNjY3IC0wLjY2NyAwLjAwMCAxLjAwMCAtMC42NjcgMC4zMzMgLTAuNjY3IDAuMDAwIDEuMDAwIC0wLjY2NyAtMC42NjcgMC4zMzMgMC4wMDAgMS4wMDAgMC4wMDAgMC4wMDAgMC4wMDAgMS4wMDAgMC4wMDAiIC8+PC9maWx0ZXI+PC9kZWZzPjxpbWFnZSB3aWR0aD0iMTYiIGhlaWdodD0iMTYiIGZpbHRlcj0idXJsKCNkYXJrcmVhZGVyLWltYWdlLWZpbHRlcikiIHhsaW5rOmhyZWY9ImRhdGE6aW1hZ2UvcG5nO2Jhc2U2NCxpVkJPUncwS0dnb0FBQUFOU1VoRVVnQUFBQkFBQUFBUUNBSUFBQUNRa1dnMkFBQUFHWFJGV0hSVGIyWjBkMkZ5WlFCQlpHOWlaU0JKYldGblpWSmxZV1I1Y2NsbFBBQUFBeWhwVkZoMFdFMU1PbU52YlM1aFpHOWlaUzU0YlhBQUFBQUFBRHcvZUhCaFkydGxkQ0JpWldkcGJqMGk3N3UvSWlCcFpEMGlWelZOTUUxd1EyVm9hVWg2Y21WVGVrNVVZM3ByWXpsa0lqOCtJRHg0T25odGNHMWxkR0VnZUcxc2JuTTZlRDBpWVdSdlltVTZibk02YldWMFlTOGlJSGc2ZUcxd2RHczlJa0ZrYjJKbElGaE5VQ0JEYjNKbElEVXVOaTFqTVRFeElEYzVMakUxT0RNeU5Td2dNakF4TlM4d09TOHhNQzB3TVRveE1Eb3lNQ0FnSUNBZ0lDQWdJajRnUEhKa1pqcFNSRVlnZUcxc2JuTTZjbVJtUFNKb2RIUndPaTh2ZDNkM0xuY3pMbTl5Wnk4eE9UazVMekF5THpJeUxYSmtaaTF6ZVc1MFlYZ3Ribk1qSWo0Z1BISmtaanBFWlhOamNtbHdkR2x2YmlCeVpHWTZZV0p2ZFhROUlpSWdlRzFzYm5NNmVHMXdQU0pvZEhSd09pOHZibk11WVdSdlltVXVZMjl0TDNoaGNDOHhMakF2SWlCNGJXeHVjenA0YlhCTlRUMGlhSFIwY0RvdkwyNXpMbUZrYjJKbExtTnZiUzk0WVhBdk1TNHdMMjF0THlJZ2VHMXNibk02YzNSU1pXWTlJbWgwZEhBNkx5OXVjeTVoWkc5aVpTNWpiMjB2ZUdGd0x6RXVNQzl6Vkhsd1pTOVNaWE52ZFhKalpWSmxaaU1pSUhodGNEcERjbVZoZEc5eVZHOXZiRDBpUVdSdlltVWdVR2h2ZEc5emFHOXdJRU5ESURJd01UVWdLRTFoWTJsdWRHOXphQ2tpSUhodGNFMU5Pa2x1YzNSaGJtTmxTVVE5SW5odGNDNXBhV1E2TnpZM01rSkVOMFUyTjBNMU1URkZOa0l5UWtORk1qUXdPREV3TURJeE56RWlJSGh0Y0UxTk9rUnZZM1Z0Wlc1MFNVUTlJbmh0Y0M1a2FXUTZOelkzTWtKRU4wWTJOME0xTVRGRk5rSXlRa05GTWpRd09ERXdNREl4TnpFaVBpQThlRzF3VFUwNlJHVnlhWFpsWkVaeWIyMGdjM1JTWldZNmFXNXpkR0Z1WTJWSlJEMGllRzF3TG1scFpEbzNOamN5UWtRM1F6WTNRelV4TVVVMlFqSkNRMFV5TkRBNE1UQXdNakUzTVNJZ2MzUlNaV1k2Wkc5amRXMWxiblJKUkQwaWVHMXdMbVJwWkRvM05qY3lRa1EzUkRZM1F6VXhNVVUyUWpKQ1EwVXlOREE0TVRBd01qRTNNU0l2UGlBOEwzSmtaanBFWlhOamNtbHdkR2x2Ymo0Z1BDOXlaR1k2VWtSR1BpQThMM2c2ZUcxd2JXVjBZVDRnUEQ5NGNHRmphMlYwSUdWdVpEMGljaUkvUHZlNkoza0FBQUF6U1VSQlZIamFZdnovL3o4RDBVRHNNd01qU1JvWVA1R3E0U1BOYlJqVk1FUTFmQ1JEZytpbi82K0oxQUpVeHNnQUVHQUEzMUJBSk1TMEdZRUFBQUFBU1VWT1JLNUNZSUk9IiAvPjwvc3ZnPg==");
        }
        .swagger-ui .outline {
            outline-color: currentcolor;
        }
        .swagger-ui .outline-transparent {
            outline-color: transparent;
        }
        .swagger-ui .outline-0 {
            outline-color: currentcolor;
        }
        @media screen and (min-width: 30em) {
            .swagger-ui .outline-ns {
                outline-color: currentcolor;
            }
            .swagger-ui .outline-transparent-ns {
                outline-color: transparent;
            }
            .swagger-ui .outline-0-ns {
                outline-color: currentcolor;
            }
        }
        @media screen and (min-width: 30em) and (max-width: 60em) {
            .swagger-ui .outline-m {
                outline-color: currentcolor;
            }
            .swagger-ui .outline-transparent-m {
                outline-color: transparent;
            }
            .swagger-ui .outline-0-m {
                outline-color: currentcolor;
            }
        }
        @media screen and (min-width: 60em) {
            .swagger-ui .outline-l {
                outline-color: currentcolor;
            }
            .swagger-ui .outline-transparent-l {
                outline-color: transparent;
            }
            .swagger-ui .outline-0-l {
                outline-color: currentcolor;
            }
        }
        .swagger-ui .b--black {
            border-color: rgb(140, 130, 115);
        }
        .swagger-ui .b--near-black {
            border-color: rgb(134, 125, 110);
        }
        .swagger-ui .b--dark-gray {
            border-color: rgb(123, 114, 101);
        }
        .swagger-ui .b--mid-gray {
            border-color: rgb(112, 104, 92);
        }
        .swagger-ui .b--gray {
            border-color: rgb(101, 94, 83);
        }
        .swagger-ui .b--silver {
            border-color: rgb(77, 83, 86);
        }
        .swagger-ui .b--light-silver {
            border-color: rgb(72, 78, 81);
        }
        .swagger-ui .b--moon-gray {
            border-color: rgb(62, 68, 70);
        }
        .swagger-ui .b--light-gray {
            border-color: rgb(53, 57, 59);
        }
        .swagger-ui .b--near-white {
            border-color: rgb(51, 55, 57);
        }
        .swagger-ui .b--white {
            border-color: rgb(48, 52, 54);
        }
        .swagger-ui .b--white-90 {
            border-color: rgba(48, 52, 54, 0.9);
        }
        .swagger-ui .b--white-80 {
            border-color: rgba(48, 52, 54, 0.8);
        }
        .swagger-ui .b--white-70 {
            border-color: rgba(48, 52, 54, 0.7);
        }
        .swagger-ui .b--white-60 {
            border-color: rgba(48, 52, 54, 0.6);
        }
        .swagger-ui .b--white-50 {
            border-color: rgba(48, 52, 54, 0.5);
        }
        .swagger-ui .b--white-40 {
            border-color: rgba(48, 52, 54, 0.4);
        }
        .swagger-ui .b--white-30 {
            border-color: rgba(48, 52, 54, 0.3);
        }
        .swagger-ui .b--white-20 {
            border-color: rgba(48, 52, 54, 0.2);
        }
        .swagger-ui .b--white-10 {
            border-color: rgba(48, 52, 54, 0.1);
        }
        .swagger-ui .b--white-05 {
            border-color: rgba(48, 52, 54, 0.05);
        }
        .swagger-ui .b--white-025 {
            border-color: rgba(48, 52, 54, 0.02);
        }
        .swagger-ui .b--white-0125 {
            border-color: rgba(48, 52, 54, 0.01);
        }
        .swagger-ui .b--black-90 {
            border-color: rgba(140, 130, 115, 0.9);
        }
        .swagger-ui .b--black-80 {
            border-color: rgba(140, 130, 115, 0.8);
        }
        .swagger-ui .b--black-70 {
            border-color: rgba(140, 130, 115, 0.7);
        }
        .swagger-ui .b--black-60 {
            border-color: rgba(140, 130, 115, 0.6);
        }
        .swagger-ui .b--black-50 {
            border-color: rgba(140, 130, 115, 0.5);
        }
        .swagger-ui .b--black-40 {
            border-color: rgba(140, 130, 115, 0.4);
        }
        .swagger-ui .b--black-30 {
            border-color: rgba(140, 130, 115, 0.3);
        }
        .swagger-ui .b--black-20 {
            border-color: rgba(140, 130, 115, 0.2);
        }
        .swagger-ui .b--black-10 {
            border-color: rgba(140, 130, 115, 0.1);
        }
        .swagger-ui .b--black-05 {
            border-color: rgba(140, 130, 115, 0.05);
        }
        .swagger-ui .b--black-025 {
            border-color: rgba(140, 130, 115, 0.02);
        }
        .swagger-ui .b--black-0125 {
            border-color: rgba(140, 130, 115, 0.01);
        }
        .swagger-ui .b--dark-red {
            border-color: rgb(181, 3, 12);
        }
        .swagger-ui .b--red {
            border-color: rgb(162, 9, 0);
        }
        .swagger-ui .b--light-red {
            border-color: rgb(151, 20, 0);
        }
        .swagger-ui .b--orange {
            border-color: rgb(179, 69, 0);
        }
        .swagger-ui .b--gold {
            border-color: rgb(179, 128, 0);
        }
        .swagger-ui .b--yellow {
            border-color: rgb(179, 151, 0);
        }
        .swagger-ui .b--light-yellow {
            border-color: rgb(123, 109, 6);
        }
        .swagger-ui .b--purple {
            border-color: rgb(86, 40, 152);
        }
        .swagger-ui .b--light-purple {
            border-color: rgb(70, 12, 141);
        }
        .swagger-ui .b--dark-pink {
            border-color: rgb(191, 0, 128);
        }
        .swagger-ui .b--hot-pink {
            border-color: rgb(159, 0, 96);
        }
        .swagger-ui .b--pink {
            border-color: rgb(140, 0, 84);
        }
        .swagger-ui .b--light-pink {
            border-color: rgb(130, 0, 73);
        }
        .swagger-ui .b--dark-green {
            border-color: rgb(29, 184, 127);
        }
        .swagger-ui .b--green {
            border-color: rgb(25, 171, 118);
        }
        .swagger-ui .b--light-green {
            border-color: rgb(23, 114, 81);
        }
        .swagger-ui .b--navy {
            border-color: rgb(129, 120, 106);
        }
        .swagger-ui .b--dark-blue {
            border-color: rgb(0, 89, 208);
        }
        .swagger-ui .b--blue {
            border-color: rgb(25, 78, 148);
        }
        .swagger-ui .b--light-blue {
            border-color: rgb(0, 69, 133);
        }
        .swagger-ui .b--lightest-blue {
            border-color: rgb(0, 73, 117);
        }
        .swagger-ui .b--washed-blue {
            border-color: rgb(0, 105, 93);
        }
        .swagger-ui .b--washed-green {
            border-color: rgb(9, 101, 66);
        }
        .swagger-ui .b--washed-yellow {
            border-color: rgb(108, 92, 0);
        }
        .swagger-ui .b--washed-red {
            border-color: rgb(112, 0, 0);
        }
        .swagger-ui .b--transparent {
            border-color: transparent;
        }
        .swagger-ui .b--inherit {
            border-color: inherit;
        }
        .swagger-ui .shadow-1 {
            box-shadow: rgba(0, 0, 0, 0.2) 0px 0px 4px 2px;
        }
        .swagger-ui .shadow-2 {
            box-shadow: rgba(0, 0, 0, 0.2) 0px 0px 8px 2px;
        }
        .swagger-ui .shadow-3 {
            box-shadow: rgba(0, 0, 0, 0.2) 2px 2px 4px 2px;
        }
        .swagger-ui .shadow-4 {
            box-shadow: rgba(0, 0, 0, 0.2) 2px 2px 8px 0px;
        }
        .swagger-ui .shadow-5 {
            box-shadow: rgba(0, 0, 0, 0.2) 4px 4px 8px 0px;
        }
        @media screen and (min-width: 30em) {
            .swagger-ui .shadow-1-ns {
                box-shadow: rgba(0, 0, 0, 0.2) 0px 0px 4px 2px;
            }
            .swagger-ui .shadow-2-ns {
                box-shadow: rgba(0, 0, 0, 0.2) 0px 0px 8px 2px;
            }
            .swagger-ui .shadow-3-ns {
                box-shadow: rgba(0, 0, 0, 0.2) 2px 2px 4px 2px;
            }
            .swagger-ui .shadow-4-ns {
                box-shadow: rgba(0, 0, 0, 0.2) 2px 2px 8px 0px;
            }
            .swagger-ui .shadow-5-ns {
                box-shadow: rgba(0, 0, 0, 0.2) 4px 4px 8px 0px;
            }
        }
        @media screen and (min-width: 30em) and (max-width: 60em) {
            .swagger-ui .shadow-1-m {
                box-shadow: rgba(0, 0, 0, 0.2) 0px 0px 4px 2px;
            }
            .swagger-ui .shadow-2-m {
                box-shadow: rgba(0, 0, 0, 0.2) 0px 0px 8px 2px;
            }
            .swagger-ui .shadow-3-m {
                box-shadow: rgba(0, 0, 0, 0.2) 2px 2px 4px 2px;
            }
            .swagger-ui .shadow-4-m {
                box-shadow: rgba(0, 0, 0, 0.2) 2px 2px 8px 0px;
            }
            .swagger-ui .shadow-5-m {
                box-shadow: rgba(0, 0, 0, 0.2) 4px 4px 8px 0px;
            }
        }
        @media screen and (min-width: 60em) {
            .swagger-ui .shadow-1-l {
                box-shadow: rgba(0, 0, 0, 0.2) 0px 0px 4px 2px;
            }
            .swagger-ui .shadow-2-l {
                box-shadow: rgba(0, 0, 0, 0.2) 0px 0px 8px 2px;
            }
            .swagger-ui .shadow-3-l {
                box-shadow: rgba(0, 0, 0, 0.2) 2px 2px 4px 2px;
            }
            .swagger-ui .shadow-4-l {
                box-shadow: rgba(0, 0, 0, 0.2) 2px 2px 8px 0px;
            }
            .swagger-ui .shadow-5-l {
                box-shadow: rgba(0, 0, 0, 0.2) 4px 4px 8px 0px;
            }
        }
        .swagger-ui .button-reset::-moz-focus-inner,
        .swagger-ui .input-reset::-moz-focus-inner {
            border-color: currentcolor;
        }
        .swagger-ui .link {
            text-decoration-color: currentcolor;
        }
        .swagger-ui .link:focus {
            outline-color: currentcolor;
        }
        .swagger-ui .black-90 {
            color: rgba(232, 230, 227, 0.9);
        }
        .swagger-ui .black-80 {
            color: rgba(232, 230, 227, 0.8);
        }
        .swagger-ui .black-70 {
            color: rgba(232, 230, 227, 0.7);
        }
        .swagger-ui .black-60 {
            color: rgba(232, 230, 227, 0.6);
        }
        .swagger-ui .black-50 {
            color: rgba(232, 230, 227, 0.5);
        }
        .swagger-ui .black-40 {
            color: rgba(232, 230, 227, 0.4);
        }
        .swagger-ui .black-30 {
            color: rgba(232, 230, 227, 0.3);
        }
        .swagger-ui .black-20 {
            color: rgba(232, 230, 227, 0.2);
        }
        .swagger-ui .black-10 {
            color: rgba(232, 230, 227, 0.1);
        }
        .swagger-ui .black-05 {
            color: rgba(232, 230, 227, 0.05);
        }
        .swagger-ui .white-90 {
            color: rgba(232, 230, 227, 0.9);
        }
        .swagger-ui .white-80 {
            color: rgba(232, 230, 227, 0.8);
        }
        .swagger-ui .white-70 {
            color: rgba(232, 230, 227, 0.7);
        }
        .swagger-ui .white-60 {
            color: rgba(232, 230, 227, 0.6);
        }
        .swagger-ui .white-50 {
            color: rgba(232, 230, 227, 0.5);
        }
        .swagger-ui .white-40 {
            color: rgba(232, 230, 227, 0.4);
        }
        .swagger-ui .white-30 {
            color: rgba(232, 230, 227, 0.3);
        }
        .swagger-ui .white-20 {
            color: rgba(232, 230, 227, 0.2);
        }
        .swagger-ui .white-10 {
            color: rgba(232, 230, 227, 0.1);
        }
        .swagger-ui .black {
            color: rgb(232, 230, 227);
        }
        .swagger-ui .near-black {
            color: rgb(221, 218, 214);
        }
        .swagger-ui .dark-gray {
            color: rgb(200, 195, 188);
        }
        .swagger-ui .mid-gray {
            color: rgb(178, 172, 162);
        }
        .swagger-ui .gray {
            color: rgb(157, 148, 136);
        }
        .swagger-ui .silver {
            color: rgb(168, 160, 149);
        }
        .swagger-ui .light-silver {
            color: rgb(178, 172, 162);
        }
        .swagger-ui .moon-gray {
            color: rgb(200, 195, 188);
        }
        .swagger-ui .light-gray {
            color: rgb(221, 218, 214);
        }
        .swagger-ui .near-white {
            color: rgb(225, 222, 219);
        }
        .swagger-ui .white {
            color: rgb(232, 230, 227);
        }
        .swagger-ui .dark-red {
            color: rgb(251, 43, 53);
        }
        .swagger-ui .red {
            color: rgb(255, 74, 63);
        }
        .swagger-ui .light-red {
            color: rgb(255, 112, 90);
        }
        .swagger-ui .orange {
            color: rgb(255, 115, 26);
        }
        .swagger-ui .gold {
            color: rgb(255, 190, 26);
        }
        .swagger-ui .yellow {
            color: rgb(255, 219, 26);
        }
        .swagger-ui .light-yellow {
            color: rgb(250, 237, 146);
        }
        .swagger-ui .purple {
            color: rgb(146, 99, 213);
        }
        .swagger-ui .light-purple {
            color: rgb(164, 99, 242);
        }
        .swagger-ui .dark-pink {
            color: rgb(255, 55, 189);
        }
        .swagger-ui .hot-pink {
            color: rgb(255, 71, 182);
        }
        .swagger-ui .pink {
            color: rgb(255, 115, 199);
        }
        .swagger-ui .light-pink {
            color: rgb(255, 140, 205);
        }
        .swagger-ui .dark-green {
            color: rgb(128, 235, 195);
        }
        .swagger-ui .green {
            color: rgb(92, 231, 180);
        }
        .swagger-ui .light-green {
            color: rgb(145, 232, 200);
        }
        .swagger-ui .navy {
            color: rgb(211, 207, 201);
        }
        .swagger-ui .dark-blue {
            color: rgb(109, 186, 255);
        }
        .swagger-ui .blue {
            color: rgb(70, 151, 224);
        }
        .swagger-ui .light-blue {
            color: rgb(131, 200, 255);
        }
        .swagger-ui .lightest-blue {
            color: rgb(169, 222, 255);
        }
        .swagger-ui .washed-blue {
            color: rgb(198, 255, 249);
        }
        .swagger-ui .washed-green {
            color: rgb(192, 250, 228);
        }
        .swagger-ui .washed-yellow {
            color: rgb(255, 245, 190);
        }
        .swagger-ui .washed-red {
            color: rgb(255, 182, 182);
        }
        .swagger-ui .color-inherit {
            color: inherit;
        }
        .swagger-ui .bg-black-90 {
            background-color: rgba(0, 0, 0, 0.9);
        }
        .swagger-ui .bg-black-80 {
            background-color: rgba(0, 0, 0, 0.8);
        }
        .swagger-ui .bg-black-70 {
            background-color: rgba(0, 0, 0, 0.7);
        }
        .swagger-ui .bg-black-60 {
            background-color: rgba(0, 0, 0, 0.6);
        }
        .swagger-ui .bg-black-50 {
            background-color: rgba(0, 0, 0, 0.5);
        }
        .swagger-ui .bg-black-40 {
            background-color: rgba(0, 0, 0, 0.4);
        }
        .swagger-ui .bg-black-30 {
            background-color: rgba(0, 0, 0, 0.3);
        }
        .swagger-ui .bg-black-20 {
            background-color: rgba(0, 0, 0, 0.2);
        }
        .swagger-ui .bg-black-10 {
            background-color: rgba(0, 0, 0, 0.1);
        }
        .swagger-ui .bg-black-05 {
            background-color: rgba(0, 0, 0, 0.05);
        }
        .swagger-ui .bg-white-90 {
            background-color: rgba(24, 26, 27, 0.9);
        }
        .swagger-ui .bg-white-80 {
            background-color: rgba(24, 26, 27, 0.8);
        }
        .swagger-ui .bg-white-70 {
            background-color: rgba(24, 26, 27, 0.7);
        }
        .swagger-ui .bg-white-60 {
            background-color: rgba(24, 26, 27, 0.6);
        }
        .swagger-ui .bg-white-50 {
            background-color: rgba(24, 26, 27, 0.5);
        }
        .swagger-ui .bg-white-40 {
            background-color: rgba(24, 26, 27, 0.4);
        }
        .swagger-ui .bg-white-30 {
            background-color: rgba(24, 26, 27, 0.3);
        }
        .swagger-ui .bg-white-20 {
            background-color: rgba(24, 26, 27, 0.2);
        }
        .swagger-ui .bg-white-10 {
            background-color: rgba(24, 26, 27, 0.1);
        }
        .swagger-ui .bg-black {
            background-color: rgb(0, 0, 0);
        }
        .swagger-ui .bg-near-black {
            background-color: rgb(13, 14, 14);
        }
        .swagger-ui .bg-dark-gray {
            background-color: rgb(38, 42, 43);
        }
        .swagger-ui .bg-mid-gray {
            background-color: rgb(64, 69, 72);
        }
        .swagger-ui .bg-gray {
            background-color: rgb(90, 97, 101);
        }
        .swagger-ui .bg-silver {
            background-color: rgb(82, 88, 92);
        }
        .swagger-ui .bg-light-silver {
            background-color: rgb(72, 78, 81);
        }
        .swagger-ui .bg-moon-gray {
            background-color: rgb(53, 57, 59);
        }
        .swagger-ui .bg-light-gray {
            background-color: rgb(34, 36, 38);
        }
        .swagger-ui .bg-near-white {
            background-color: rgb(30, 33, 34);
        }
        .swagger-ui .bg-white {
            background-color: rgb(24, 26, 27);
        }
        .swagger-ui .bg-transparent {
            background-color: transparent;
        }
        .swagger-ui .bg-dark-red {
            background-color: rgb(185, 3, 12);
        }
        .swagger-ui .bg-red {
            background-color: rgb(172, 9, 0);
        }
        .swagger-ui .bg-light-red {
            background-color: rgb(149, 20, 0);
        }
        .swagger-ui .bg-orange {
            background-color: rgb(204, 79, 0);
        }
        .swagger-ui .bg-gold {
            background-color: rgb(153, 110, 0);
        }
        .swagger-ui .bg-yellow {
            background-color: rgb(153, 129, 0);
        }
        .swagger-ui .bg-light-yellow {
            background-color: rgb(75, 67, 4);
        }
        .swagger-ui .bg-purple {
            background-color: rgb(75, 35, 132);
        }
        .swagger-ui .bg-light-purple {
            background-color: rgb(70, 12, 141);
        }
        .swagger-ui .bg-dark-pink {
            background-color: rgb(170, 0, 114);
        }
        .swagger-ui .bg-hot-pink {
            background-color: rgb(165, 0, 100);
        }
        .swagger-ui .bg-pink {
            background-color: rgb(127, 0, 76);
        }
        .swagger-ui .bg-light-pink {
            background-color: rgb(106, 0, 60);
        }
        .swagger-ui .bg-dark-green {
            background-color: rgb(15, 95, 66);
        }
        .swagger-ui .bg-green {
            background-color: rgb(20, 135, 93);
        }
        .swagger-ui .bg-light-green {
            background-color: rgb(21, 100, 79);
        }
        .swagger-ui .bg-navy {
            background-color: rgb(0, 22, 54);
        }
        .swagger-ui .bg-dark-blue {
            background-color: rgb(0, 54, 126);
        }
        .swagger-ui .bg-blue {
            background-color: rgb(28, 87, 165);
        }
        .swagger-ui .bg-light-blue {
            background-color: rgb(0, 59, 114);
        }
        .swagger-ui .bg-lightest-blue {
            background-color: rgb(38, 41, 43);
        }
        .swagger-ui .bg-washed-blue {
            background-color: rgb(0, 56, 52);
        }
        .swagger-ui .bg-washed-green {
            background-color: rgb(5, 61, 45);
        }
        .swagger-ui .bg-washed-yellow {
            background-color: rgb(47, 40, 0);
        }
        .swagger-ui .bg-washed-red {
            background-color: rgb(70, 0, 0);
        }
        .swagger-ui .bg-inherit {
            background-color: inherit;
        }
        .swagger-ui .hover-black:focus,
        .swagger-ui .hover-black:hover {
            color: rgb(232, 230, 227);
        }
        .swagger-ui .hover-near-black:focus,
        .swagger-ui .hover-near-black:hover {
            color: rgb(221, 218, 214);
        }
        .swagger-ui .hover-dark-gray:focus,
        .swagger-ui .hover-dark-gray:hover {
            color: rgb(200, 195, 188);
        }
        .swagger-ui .hover-mid-gray:focus,
        .swagger-ui .hover-mid-gray:hover {
            color: rgb(178, 172, 162);
        }
        .swagger-ui .hover-gray:focus,
        .swagger-ui .hover-gray:hover {
            color: rgb(157, 148, 136);
        }
        .swagger-ui .hover-silver:focus,
        .swagger-ui .hover-silver:hover {
            color: rgb(168, 160, 149);
        }
        .swagger-ui .hover-light-silver:focus,
        .swagger-ui .hover-light-silver:hover {
            color: rgb(178, 172, 162);
        }
        .swagger-ui .hover-moon-gray:focus,
        .swagger-ui .hover-moon-gray:hover {
            color: rgb(200, 195, 188);
        }
        .swagger-ui .hover-light-gray:focus,
        .swagger-ui .hover-light-gray:hover {
            color: rgb(221, 218, 214);
        }
        .swagger-ui .hover-near-white:focus,
        .swagger-ui .hover-near-white:hover {
            color: rgb(225, 222, 219);
        }
        .swagger-ui .hover-white:focus,
        .swagger-ui .hover-white:hover {
            color: rgb(232, 230, 227);
        }
        .swagger-ui .hover-black-90:focus,
        .swagger-ui .hover-black-90:hover {
            color: rgba(232, 230, 227, 0.9);
        }
        .swagger-ui .hover-black-80:focus,
        .swagger-ui .hover-black-80:hover {
            color: rgba(232, 230, 227, 0.8);
        }
        .swagger-ui .hover-black-70:focus,
        .swagger-ui .hover-black-70:hover {
            color: rgba(232, 230, 227, 0.7);
        }
        .swagger-ui .hover-black-60:focus,
        .swagger-ui .hover-black-60:hover {
            color: rgba(232, 230, 227, 0.6);
        }
        .swagger-ui .hover-black-50:focus,
        .swagger-ui .hover-black-50:hover {
            color: rgba(232, 230, 227, 0.5);
        }
        .swagger-ui .hover-black-40:focus,
        .swagger-ui .hover-black-40:hover {
            color: rgba(232, 230, 227, 0.4);
        }
        .swagger-ui .hover-black-30:focus,
        .swagger-ui .hover-black-30:hover {
            color: rgba(232, 230, 227, 0.3);
        }
        .swagger-ui .hover-black-20:focus,
        .swagger-ui .hover-black-20:hover {
            color: rgba(232, 230, 227, 0.2);
        }
        .swagger-ui .hover-black-10:focus,
        .swagger-ui .hover-black-10:hover {
            color: rgba(232, 230, 227, 0.1);
        }
        .swagger-ui .hover-white-90:focus,
        .swagger-ui .hover-white-90:hover {
            color: rgba(232, 230, 227, 0.9);
        }
        .swagger-ui .hover-white-80:focus,
        .swagger-ui .hover-white-80:hover {
            color: rgba(232, 230, 227, 0.8);
        }
        .swagger-ui .hover-white-70:focus,
        .swagger-ui .hover-white-70:hover {
            color: rgba(232, 230, 227, 0.7);
        }
        .swagger-ui .hover-white-60:focus,
        .swagger-ui .hover-white-60:hover {
            color: rgba(232, 230, 227, 0.6);
        }
        .swagger-ui .hover-white-50:focus,
        .swagger-ui .hover-white-50:hover {
            color: rgba(232, 230, 227, 0.5);
        }
        .swagger-ui .hover-white-40:focus,
        .swagger-ui .hover-white-40:hover {
            color: rgba(232, 230, 227, 0.4);
        }
        .swagger-ui .hover-white-30:focus,
        .swagger-ui .hover-white-30:hover {
            color: rgba(232, 230, 227, 0.3);
        }
        .swagger-ui .hover-white-20:focus,
        .swagger-ui .hover-white-20:hover {
            color: rgba(232, 230, 227, 0.2);
        }
        .swagger-ui .hover-white-10:focus,
        .swagger-ui .hover-white-10:hover {
            color: rgba(232, 230, 227, 0.1);
        }
        .swagger-ui .hover-inherit:focus,
        .swagger-ui .hover-inherit:hover {
            color: inherit;
        }
        .swagger-ui .hover-bg-black:focus,
        .swagger-ui .hover-bg-black:hover {
            background-color: rgb(0, 0, 0);
        }
        .swagger-ui .hover-bg-near-black:focus,
        .swagger-ui .hover-bg-near-black:hover {
            background-color: rgb(13, 14, 14);
        }
        .swagger-ui .hover-bg-dark-gray:focus,
        .swagger-ui .hover-bg-dark-gray:hover {
            background-color: rgb(38, 42, 43);
        }
        .swagger-ui .hover-bg-mid-gray:focus,
        .swagger-ui .hover-bg-mid-gray:hover {
            background-color: rgb(64, 69, 72);
        }
        .swagger-ui .hover-bg-gray:focus,
        .swagger-ui .hover-bg-gray:hover {
            background-color: rgb(90, 97, 101);
        }
        .swagger-ui .hover-bg-silver:focus,
        .swagger-ui .hover-bg-silver:hover {
            background-color: rgb(82, 88, 92);
        }
        .swagger-ui .hover-bg-light-silver:focus,
        .swagger-ui .hover-bg-light-silver:hover {
            background-color: rgb(72, 78, 81);
        }
        .swagger-ui .hover-bg-moon-gray:focus,
        .swagger-ui .hover-bg-moon-gray:hover {
            background-color: rgb(53, 57, 59);
        }
        .swagger-ui .hover-bg-light-gray:focus,
        .swagger-ui .hover-bg-light-gray:hover {
            background-color: rgb(34, 36, 38);
        }
        .swagger-ui .hover-bg-near-white:focus,
        .swagger-ui .hover-bg-near-white:hover {
            background-color: rgb(30, 33, 34);
        }
        .swagger-ui .hover-bg-white:focus,
        .swagger-ui .hover-bg-white:hover {
            background-color: rgb(24, 26, 27);
        }
        .swagger-ui .hover-bg-transparent:focus,
        .swagger-ui .hover-bg-transparent:hover {
            background-color: transparent;
        }
        .swagger-ui .hover-bg-black-90:focus,
        .swagger-ui .hover-bg-black-90:hover {
            background-color: rgba(0, 0, 0, 0.9);
        }
        .swagger-ui .hover-bg-black-80:focus,
        .swagger-ui .hover-bg-black-80:hover {
            background-color: rgba(0, 0, 0, 0.8);
        }
        .swagger-ui .hover-bg-black-70:focus,
        .swagger-ui .hover-bg-black-70:hover {
            background-color: rgba(0, 0, 0, 0.7);
        }
        .swagger-ui .hover-bg-black-60:focus,
        .swagger-ui .hover-bg-black-60:hover {
            background-color: rgba(0, 0, 0, 0.6);
        }
        .swagger-ui .hover-bg-black-50:focus,
        .swagger-ui .hover-bg-black-50:hover {
            background-color: rgba(0, 0, 0, 0.5);
        }
        .swagger-ui .hover-bg-black-40:focus,
        .swagger-ui .hover-bg-black-40:hover {
            background-color: rgba(0, 0, 0, 0.4);
        }
        .swagger-ui .hover-bg-black-30:focus,
        .swagger-ui .hover-bg-black-30:hover {
            background-color: rgba(0, 0, 0, 0.3);
        }
        .swagger-ui .hover-bg-black-20:focus,
        .swagger-ui .hover-bg-black-20:hover {
            background-color: rgba(0, 0, 0, 0.2);
        }
        .swagger-ui .hover-bg-black-10:focus,
        .swagger-ui .hover-bg-black-10:hover {
            background-color: rgba(0, 0, 0, 0.1);
        }
        .swagger-ui .hover-bg-white-90:focus,
        .swagger-ui .hover-bg-white-90:hover {
            background-color: rgba(24, 26, 27, 0.9);
        }
        .swagger-ui .hover-bg-white-80:focus,
        .swagger-ui .hover-bg-white-80:hover {
            background-color: rgba(24, 26, 27, 0.8);
        }
        .swagger-ui .hover-bg-white-70:focus,
        .swagger-ui .hover-bg-white-70:hover {
            background-color: rgba(24, 26, 27, 0.7);
        }
        .swagger-ui .hover-bg-white-60:focus,
        .swagger-ui .hover-bg-white-60:hover {
            background-color: rgba(24, 26, 27, 0.6);
        }
        .swagger-ui .hover-bg-white-50:focus,
        .swagger-ui .hover-bg-white-50:hover {
            background-color: rgba(24, 26, 27, 0.5);
        }
        .swagger-ui .hover-bg-white-40:focus,
        .swagger-ui .hover-bg-white-40:hover {
            background-color: rgba(24, 26, 27, 0.4);
        }
        .swagger-ui .hover-bg-white-30:focus,
        .swagger-ui .hover-bg-white-30:hover {
            background-color: rgba(24, 26, 27, 0.3);
        }
        .swagger-ui .hover-bg-white-20:focus,
        .swagger-ui .hover-bg-white-20:hover {
            background-color: rgba(24, 26, 27, 0.2);
        }
        .swagger-ui .hover-bg-white-10:focus,
        .swagger-ui .hover-bg-white-10:hover {
            background-color: rgba(24, 26, 27, 0.1);
        }
        .swagger-ui .hover-dark-red:focus,
        .swagger-ui .hover-dark-red:hover {
            color: rgb(251, 43, 53);
        }
        .swagger-ui .hover-red:focus,
        .swagger-ui .hover-red:hover {
            color: rgb(255, 74, 63);
        }
        .swagger-ui .hover-light-red:focus,
        .swagger-ui .hover-light-red:hover {
            color: rgb(255, 112, 90);
        }
        .swagger-ui .hover-orange:focus,
        .swagger-ui .hover-orange:hover {
            color: rgb(255, 115, 26);
        }
        .swagger-ui .hover-gold:focus,
        .swagger-ui .hover-gold:hover {
            color: rgb(255, 190, 26);
        }
        .swagger-ui .hover-yellow:focus,
        .swagger-ui .hover-yellow:hover {
            color: rgb(255, 219, 26);
        }
        .swagger-ui .hover-light-yellow:focus,
        .swagger-ui .hover-light-yellow:hover {
            color: rgb(250, 237, 146);
        }
        .swagger-ui .hover-purple:focus,
        .swagger-ui .hover-purple:hover {
            color: rgb(146, 99, 213);
        }
        .swagger-ui .hover-light-purple:focus,
        .swagger-ui .hover-light-purple:hover {
            color: rgb(164, 99, 242);
        }
        .swagger-ui .hover-dark-pink:focus,
        .swagger-ui .hover-dark-pink:hover {
            color: rgb(255, 55, 189);
        }
        .swagger-ui .hover-hot-pink:focus,
        .swagger-ui .hover-hot-pink:hover {
            color: rgb(255, 71, 182);
        }
        .swagger-ui .hover-pink:focus,
        .swagger-ui .hover-pink:hover {
            color: rgb(255, 115, 199);
        }
        .swagger-ui .hover-light-pink:focus,
        .swagger-ui .hover-light-pink:hover {
            color: rgb(255, 140, 205);
        }
        .swagger-ui .hover-dark-green:focus,
        .swagger-ui .hover-dark-green:hover {
            color: rgb(128, 235, 195);
        }
        .swagger-ui .hover-green:focus,
        .swagger-ui .hover-green:hover {
            color: rgb(92, 231, 180);
        }
        .swagger-ui .hover-light-green:focus,
        .swagger-ui .hover-light-green:hover {
            color: rgb(145, 232, 200);
        }
        .swagger-ui .hover-navy:focus,
        .swagger-ui .hover-navy:hover {
            color: rgb(211, 207, 201);
        }
        .swagger-ui .hover-dark-blue:focus,
        .swagger-ui .hover-dark-blue:hover {
            color: rgb(109, 186, 255);
        }
        .swagger-ui .hover-blue:focus,
        .swagger-ui .hover-blue:hover {
            color: rgb(70, 151, 224);
        }
        .swagger-ui .hover-light-blue:focus,
        .swagger-ui .hover-light-blue:hover {
            color: rgb(131, 200, 255);
        }
        .swagger-ui .hover-lightest-blue:focus,
        .swagger-ui .hover-lightest-blue:hover {
            color: rgb(169, 222, 255);
        }
        .swagger-ui .hover-washed-blue:focus,
        .swagger-ui .hover-washed-blue:hover {
            color: rgb(198, 255, 249);
        }
        .swagger-ui .hover-washed-green:focus,
        .swagger-ui .hover-washed-green:hover {
            color: rgb(192, 250, 228);
        }
        .swagger-ui .hover-washed-yellow:focus,
        .swagger-ui .hover-washed-yellow:hover {
            color: rgb(255, 245, 190);
        }
        .swagger-ui .hover-washed-red:focus,
        .swagger-ui .hover-washed-red:hover {
            color: rgb(255, 182, 182);
        }
        .swagger-ui .hover-bg-dark-red:focus,
        .swagger-ui .hover-bg-dark-red:hover {
            background-color: rgb(185, 3, 12);
        }
        .swagger-ui .hover-bg-red:focus,
        .swagger-ui .hover-bg-red:hover {
            background-color: rgb(172, 9, 0);
        }
        .swagger-ui .hover-bg-light-red:focus,
        .swagger-ui .hover-bg-light-red:hover {
            background-color: rgb(149, 20, 0);
        }
        .swagger-ui .hover-bg-orange:focus,
        .swagger-ui .hover-bg-orange:hover {
            background-color: rgb(204, 79, 0);
        }
        .swagger-ui .hover-bg-gold:focus,
        .swagger-ui .hover-bg-gold:hover {
            background-color: rgb(153, 110, 0);
        }
        .swagger-ui .hover-bg-yellow:focus,
        .swagger-ui .hover-bg-yellow:hover {
            background-color: rgb(153, 129, 0);
        }
        .swagger-ui .hover-bg-light-yellow:focus,
        .swagger-ui .hover-bg-light-yellow:hover {
            background-color: rgb(75, 67, 4);
        }
        .swagger-ui .hover-bg-purple:focus,
        .swagger-ui .hover-bg-purple:hover {
            background-color: rgb(75, 35, 132);
        }
        .swagger-ui .hover-bg-light-purple:focus,
        .swagger-ui .hover-bg-light-purple:hover {
            background-color: rgb(70, 12, 141);
        }
        .swagger-ui .hover-bg-dark-pink:focus,
        .swagger-ui .hover-bg-dark-pink:hover {
            background-color: rgb(170, 0, 114);
        }
        .swagger-ui .hover-bg-hot-pink:focus,
        .swagger-ui .hover-bg-hot-pink:hover {
            background-color: rgb(165, 0, 100);
        }
        .swagger-ui .hover-bg-pink:focus,
        .swagger-ui .hover-bg-pink:hover {
            background-color: rgb(127, 0, 76);
        }
        .swagger-ui .hover-bg-light-pink:focus,
        .swagger-ui .hover-bg-light-pink:hover {
            background-color: rgb(106, 0, 60);
        }
        .swagger-ui .hover-bg-dark-green:focus,
        .swagger-ui .hover-bg-dark-green:hover {
            background-color: rgb(15, 95, 66);
        }
        .swagger-ui .hover-bg-green:focus,
        .swagger-ui .hover-bg-green:hover {
            background-color: rgb(20, 135, 93);
        }
        .swagger-ui .hover-bg-light-green:focus,
        .swagger-ui .hover-bg-light-green:hover {
            background-color: rgb(21, 100, 79);
        }
        .swagger-ui .hover-bg-navy:focus,
        .swagger-ui .hover-bg-navy:hover {
            background-color: rgb(0, 22, 54);
        }
        .swagger-ui .hover-bg-dark-blue:focus,
        .swagger-ui .hover-bg-dark-blue:hover {
            background-color: rgb(0, 54, 126);
        }
        .swagger-ui .hover-bg-blue:focus,
        .swagger-ui .hover-bg-blue:hover {
            background-color: rgb(28, 87, 165);
        }
        .swagger-ui .hover-bg-light-blue:focus,
        .swagger-ui .hover-bg-light-blue:hover {
            background-color: rgb(0, 59, 114);
        }
        .swagger-ui .hover-bg-lightest-blue:focus,
        .swagger-ui .hover-bg-lightest-blue:hover {
            background-color: rgb(38, 41, 43);
        }
        .swagger-ui .hover-bg-washed-blue:focus,
        .swagger-ui .hover-bg-washed-blue:hover {
            background-color: rgb(0, 56, 52);
        }
        .swagger-ui .hover-bg-washed-green:focus,
        .swagger-ui .hover-bg-washed-green:hover {
            background-color: rgb(5, 61, 45);
        }
        .swagger-ui .hover-bg-washed-yellow:focus,
        .swagger-ui .hover-bg-washed-yellow:hover {
            background-color: rgb(47, 40, 0);
        }
        .swagger-ui .hover-bg-washed-red:focus,
        .swagger-ui .hover-bg-washed-red:hover {
            background-color: rgb(70, 0, 0);
        }
        .swagger-ui .hover-bg-inherit:focus,
        .swagger-ui .hover-bg-inherit:hover {
            background-color: inherit;
        }
        .swagger-ui .striped--light-silver:nth-child(2n+1) {
            background-color: rgb(72, 78, 81);
        }
        .swagger-ui .striped--moon-gray:nth-child(2n+1) {
            background-color: rgb(53, 57, 59);
        }
        .swagger-ui .striped--light-gray:nth-child(2n+1) {
            background-color: rgb(34, 36, 38);
        }
        .swagger-ui .striped--near-white:nth-child(2n+1) {
            background-color: rgb(30, 33, 34);
        }
        .swagger-ui .stripe-light:nth-child(2n+1) {
            background-color: rgba(24, 26, 27, 0.1);
        }
        .swagger-ui .stripe-dark:nth-child(2n+1) {
            background-color: rgba(0, 0, 0, 0.1);
        }
        .swagger-ui .strike {
            text-decoration-color: currentcolor;
        }
        .swagger-ui .underline {
            text-decoration-color: currentcolor;
        }
        .swagger-ui .no-underline {
            text-decoration-color: currentcolor;
        }
        @media screen and (min-width: 30em) {
            .swagger-ui .strike-ns {
                text-decoration-color: currentcolor;
            }
            .swagger-ui .underline-ns {
                text-decoration-color: currentcolor;
            }
            .swagger-ui .no-underline-ns {
                text-decoration-color: currentcolor;
            }
        }
        @media screen and (min-width: 30em) and (max-width: 60em) {
            .swagger-ui .strike-m {
                text-decoration-color: currentcolor;
            }
            .swagger-ui .underline-m {
                text-decoration-color: currentcolor;
            }
            .swagger-ui .no-underline-m {
                text-decoration-color: currentcolor;
            }
        }
        @media screen and (min-width: 60em) {
            .swagger-ui .strike-l {
                text-decoration-color: currentcolor;
            }
            .swagger-ui .underline-l {
                text-decoration-color: currentcolor;
            }
            .swagger-ui .no-underline-l {
                text-decoration-color: currentcolor;
            }
        }
        .swagger-ui .underline-hover:focus,
        .swagger-ui .underline-hover:hover {
            text-decoration-color: currentcolor;
        }
        .swagger-ui .shadow-hover::after {
            box-shadow: rgba(0, 0, 0, 0.2) 0px 0px 16px 2px;
        }
        .swagger-ui .nested-links a {
            color: rgb(70, 151, 224);
        }
        .swagger-ui .nested-links a:focus,
        .swagger-ui .nested-links a:hover {
            color: rgb(131, 200, 255);
        }
        .swagger-ui .opblock-tag {
            border-bottom-color: rgba(117, 109, 96, 0.3);
        }
        .swagger-ui .opblock-tag:hover {
            background-color: rgba(0, 0, 0, 0.02);
            background-image: none;
        }
        .swagger-ui .opblock-tag {
            color: rgb(188, 182, 173);
        }
        .swagger-ui .opblock-tag small {
            color: rgb(188, 182, 173);
        }
        .swagger-ui .parameter__type {
            color: rgb(188, 182, 173);
        }
        .swagger-ui .opblock {
            border-color: rgb(140, 130, 115);
            box-shadow: rgba(0, 0, 0, 0.19) 0px 0px 3px;
        }
        .swagger-ui .opblock .tab-header .tab-item.active h4 span::after {
            background-color: rgb(96, 104, 108);
            background-image: none;
        }
        .swagger-ui .opblock.is-open .opblock-summary {
            border-bottom-color: rgb(140, 130, 115);
        }
        .swagger-ui .opblock .opblock-section-header {
            background-color: rgba(24, 26, 27, 0.8);
            background-image: none;
            box-shadow: rgba(0, 0, 0, 0.1) 0px 1px 2px;
        }
        .swagger-ui .opblock .opblock-section-header > label {
            color: rgb(188, 182, 173);
        }
        .swagger-ui .opblock .opblock-section-header h4 {
            color: rgb(188, 182, 173);
        }
        .swagger-ui .opblock .opblock-summary-method {
            background-color: rgb(0, 0, 0);
            background-image: none;
            color: rgb(232, 230, 227);
            text-shadow: rgba(0, 0, 0, 0.1) 0px 1px 0px;
        }
        .swagger-ui .opblock .opblock-summary-operation-id,
        .swagger-ui .opblock .opblock-summary-path,
        .swagger-ui .opblock .opblock-summary-path__deprecated {
            color: rgb(188, 182, 173);
        }
        .swagger-ui .opblock .opblock-summary-path__deprecated {
            text-decoration-color: currentcolor;
        }
        .swagger-ui .opblock .opblock-summary-description {
            color: rgb(188, 182, 173);
        }
        .swagger-ui .opblock.opblock-post {
            background-color: rgba(42, 149, 112, 0.1);
            background-image: none;
            border-color: rgb(38, 134, 90);
        }
        .swagger-ui .opblock.opblock-post .opblock-summary-method {
            background-color: rgb(42, 149, 112);
            background-image: none;
        }
        .swagger-ui .opblock.opblock-post .opblock-summary {
            border-color: rgb(38, 134, 90);
        }
        .swagger-ui .opblock.opblock-post .tab-header .tab-item.active h4 span::after {
            background-color: rgb(42, 149, 112);
            background-image: none;
        }
        .swagger-ui .opblock.opblock-put {
            background-color: rgba(174, 98, 3, 0.1);
            background-image: none;
            border-color: rgb(163, 91, 2);
        }
        .swagger-ui .opblock.opblock-put .opblock-summary-method {
            background-color: rgb(174, 98, 3);
            background-image: none;
        }
        .swagger-ui .opblock.opblock-put .opblock-summary {
            border-color: rgb(163, 91, 2);
        }
        .swagger-ui .opblock.opblock-put .tab-header .tab-item.active h4 span::after {
            background-color: rgb(174, 98, 3);
            background-image: none;
        }
        .swagger-ui .opblock.opblock-delete {
            background-color: rgba(165, 5, 5, 0.1);
            background-image: none;
            border-color: rgb(157, 5, 5);
        }
        .swagger-ui .opblock.opblock-delete .opblock-summary-method {
            background-color: rgb(165, 5, 5);
            background-image: none;
        }
        .swagger-ui .opblock.opblock-delete .opblock-summary {
            border-color: rgb(157, 5, 5);
        }
        .swagger-ui .opblock.opblock-delete .tab-header .tab-item.active h4 span::after {
            background-color: rgb(165, 5, 5);
            background-image: none;
        }
        .swagger-ui .opblock.opblock-get {
            background-color: rgba(1, 73, 145, 0.1);
            background-image: none;
            border-color: rgb(1, 74, 149);
        }
        .swagger-ui .opblock.opblock-get .opblock-summary-method {
            background-color: rgb(1, 73, 145);
            background-image: none;
        }
        .swagger-ui .opblock.opblock-get .opblock-summary {
            border-color: rgb(1, 74, 149);
        }
        .swagger-ui .opblock.opblock-get .tab-header .tab-item.active h4 span::after {
            background-color: rgb(1, 73, 145);
            background-image: none;
        }
        .swagger-ui .opblock.opblock-patch {
            background-color: rgba(24, 149, 128, 0.1);
            background-image: none;
            border-color: rgb(22, 140, 114);
        }
        .swagger-ui .opblock.opblock-patch .opblock-summary-method {
            background-color: rgb(24, 149, 128);
            background-image: none;
        }
        .swagger-ui .opblock.opblock-patch .opblock-summary {
            border-color: rgb(22, 140, 114);
        }
        .swagger-ui .opblock.opblock-patch .tab-header .tab-item.active h4 span::after {
            background-color: rgb(24, 149, 128);
            background-image: none;
        }
        .swagger-ui .opblock.opblock-head {
            background-color: rgba(103, 1, 193, 0.1);
            background-image: none;
            border-color: rgb(93, 1, 173);
        }
        .swagger-ui .opblock.opblock-head .opblock-summary-method {
            background-color: rgb(103, 1, 193);
            background-image: none;
        }
        .swagger-ui .opblock.opblock-head .opblock-summary {
            border-color: rgb(93, 1, 173);
        }
        .swagger-ui .opblock.opblock-head .tab-header .tab-item.active h4 span::after {
            background-color: rgb(103, 1, 193);
            background-image: none;
        }
        .swagger-ui .opblock.opblock-options {
            background-color: rgba(10, 72, 134, 0.1);
            background-image: none;
            border-color: rgb(15, 101, 186);
        }
        .swagger-ui .opblock.opblock-options .opblock-summary-method {
            background-color: rgb(10, 72, 134);
            background-image: none;
        }
        .swagger-ui .opblock.opblock-options .opblock-summary {
            border-color: rgb(15, 101, 186);
        }
        .swagger-ui .opblock.opblock-options .tab-header .tab-item.active h4 span::after {
            background-color: rgb(10, 72, 134);
            background-image: none;
        }
        .swagger-ui .opblock.opblock-deprecated {
            background-color: rgba(35, 38, 40, 0.1);
            background-image: none;
            border-color: rgb(54, 58, 60);
        }
        .swagger-ui .opblock.opblock-deprecated .opblock-summary-method {
            background-color: rgb(35, 38, 40);
            background-image: none;
        }
        .swagger-ui .opblock.opblock-deprecated .opblock-summary {
            border-color: rgb(54, 58, 60);
        }
        .swagger-ui .opblock.opblock-deprecated .tab-header .tab-item.active h4 span::after {
            background-color: rgb(35, 38, 40);
            background-image: none;
        }
        .swagger-ui .filter .operation-filter-input {
            border-color: rgb(57, 62, 64);
        }
        .swagger-ui .download-url-wrapper .failed,
        .swagger-ui .filter .failed {
            color: rgb(255, 26, 26);
        }
        .swagger-ui .download-url-wrapper .loading,
        .swagger-ui .filter .loading {
            color: rgb(178, 172, 162);
        }
        .swagger-ui .tab {
            list-style-image: none;
        }
        .swagger-ui .tab li {
            color: rgb(188, 182, 173);
        }
        .swagger-ui .tab li:first-of-type::after {
            background-color: rgba(0, 0, 0, 0.2);
            background-image: none;
        }
        .swagger-ui .tab li button.tablinks {
            background-color: rgba(0, 0, 0, 0);
            background-image: none;
            border-color: currentcolor;
            color: inherit;
        }
        .swagger-ui .opblock-description-wrapper,
        .swagger-ui .opblock-external-docs-wrapper,
        .swagger-ui .opblock-title_normal {
            color: rgb(188, 182, 173);
        }
        .swagger-ui .opblock-description-wrapper h4,
        .swagger-ui .opblock-external-docs-wrapper h4,
        .swagger-ui .opblock-title_normal h4 {
            color: rgb(188, 182, 173);
        }
        .swagger-ui .opblock-description-wrapper p,
        .swagger-ui .opblock-external-docs-wrapper p,
        .swagger-ui .opblock-title_normal p {
            color: rgb(188, 182, 173);
        }
        .swagger-ui .responses-inner h4,
        .swagger-ui .responses-inner h5 {
            color: rgb(188, 182, 173);
        }
        .swagger-ui .response-col_status {
            color: rgb(188, 182, 173);
        }
        .swagger-ui .response-col_status .response-undocumented {
            color: rgb(162, 154, 142);
        }
        .swagger-ui .response-col_links {
            color: rgb(188, 182, 173);
        }
        .swagger-ui .response-col_links .response-undocumented {
            color: rgb(162, 154, 142);
        }
        .swagger-ui .opblock-body pre.microlight {
            background-color: rgb(38, 42, 43);
            background-image: none;
            color: rgb(232, 230, 227);
        }
        .swagger-ui .download-contents {
            background-color: rgb(91, 99, 103);
            background-image: none;
            color: rgb(232, 230, 227);
        }
        .swagger-ui .scheme-container {
            background-color: rgb(24, 26, 27);
            background-image: none;
            box-shadow: rgba(0, 0, 0, 0.15) 0px 1px 2px 0px;
        }
        .swagger-ui .scheme-container .schemes > label {
            color: rgb(188, 182, 173);
        }
        .swagger-ui .loading-container .loading::after {
            color: rgb(188, 182, 173);
        }
        .swagger-ui .loading-container .loading::before {
            border-color: rgba(140, 130, 115, 0.6) rgba(112, 104, 92, 0.1) rgba(112, 104, 92, 0.1);
        }
        .swagger-ui .response-control-media-type--accept-controller select {
            border-color: rgb(0, 217, 0);
        }
        .swagger-ui .response-control-media-type__accept-message {
            color: rgb(114, 255, 114);
        }
        .swagger-ui .no-margin {
            border-color: currentcolor;
        }
        .swagger-ui section h3 {
            color: rgb(188, 182, 173);
        }
        .swagger-ui a.nostyle,
        .swagger-ui a.nostyle:visited {
            color: inherit;
            text-decoration-color: inherit;
        }
        .swagger-ui .fallback {
            color: rgb(178, 172, 162);
        }
        .swagger-ui .version-pragma__message code {
            background-color: rgb(43, 46, 48);
        }
        .swagger-ui span.token-string {
            color: rgb(178, 172, 162);
        }
        .swagger-ui span.token-not-formatted {
            color: rgb(178, 172, 162);
        }
        .swagger-ui .btn {
            background-color: transparent;
            background-image: none;
            border-color: rgb(84, 91, 94);
            box-shadow: rgba(0, 0, 0, 0.1) 0px 1px 2px;
            color: rgb(188, 182, 173);
        }
        .swagger-ui .btn:hover {
            box-shadow: rgba(0, 0, 0, 0.3) 0px 0px 5px;
        }
        .swagger-ui .btn.cancel {
            background-color: transparent;
            border-color: rgb(150, 0, 0);
            color: rgb(255, 93, 93);
        }
        .swagger-ui .btn.authorize {
            background-color: transparent;
            border-color: rgb(38, 134, 90);
            color: rgb(88, 208, 153);
        }
        .swagger-ui .btn.authorize svg {
            fill: rgb(88, 208, 153);
        }
        .swagger-ui .btn.execute {
            background-color: rgb(24, 84, 153);
            border-color: rgb(23, 78, 143);
            color: rgb(232, 230, 227);
        }
        .swagger-ui .authorization__btn {
            background-color: rgba(0, 0, 0, 0);
            background-image: none;
            border-color: currentcolor;
        }
        .swagger-ui .model-box-control,
        .swagger-ui .models-control,
        .swagger-ui .opblock-summary-control {
            border-block-color: inherit;
            border-inline-color: inherit;
            background-color: inherit;
            background-image: inherit;
            border-top-color: inherit;
            border-right-color: inherit;
            border-left-color: inherit;
            column-rule-color: inherit;
            box-shadow: inherit;
            print-color-adjust: inherit;
            color-interpolation: inherit;
            color-interpolation-filters: inherit;
            fill: inherit;
            stroke: inherit;
            color: inherit;
            text-shadow: inherit;
            text-emphasis-color: inherit;
            -webkit-text-fill-color: inherit;
            -webkit-text-stroke-color: inherit;
            caret-color: inherit;
            accent-color: inherit;
            color-scheme: inherit;
            scrollbar-color: inherit;
            list-style-image: inherit;
            outline-color: inherit;
            stop-color: inherit;
            flood-color: inherit;
            lighting-color: inherit;
            text-decoration-color: inherit;
            border-bottom-color: currentcolor;
        }
        .swagger-ui .model-box-control:focus,
        .swagger-ui .models-control:focus,
        .swagger-ui .opblock-summary-control:focus {
            outline-color: currentcolor;
        }
        .swagger-ui .expand-methods,
        .swagger-ui .expand-operation {
            background-color: rgba(0, 0, 0, 0);
            background-image: none;
            border-color: currentcolor;
        }
        .swagger-ui .expand-methods:hover svg {
            fill: rgb(192, 186, 178);
        }
        .swagger-ui .expand-methods svg {
            fill: rgb(161, 153, 141);
        }
        .swagger-ui button.invalid {
            background-color: rgb(61, 3, 3);
            background-image: none;
            border-color: rgb(157, 5, 5);
        }
        .swagger-ui .copy-to-clipboard {
            background-color: rgb(91, 99, 103);
            background-image: none;
            border-color: currentcolor;
        }
        .swagger-ui .copy-to-clipboard button {
            background-color: rgba(0, 0, 0, 0);
            background-image: url("data:image/svg+xml;charset=utf-8,<svg xmlns=\"http://www.w3.org/2000/svg\" width=\"16\" height=\"15\" aria-hidden=\"true\"><path fill=\"%23fff\" fill-rule=\"evenodd\" d=\"M4 12h4v1H4v-1zm5-6H4v1h5V6zm2 3V7l-3 3 3 3v-2h5V9h-5zM6.5 8H4v1h2.5V8zM4 11h2.5v-1H4v1zm9 1h1v2c-.02.28-.11.52-.3.7-.19.18-.42.28-.7.3H3c-.55 0-1-.45-1-1V3c0-.55.45-1 1-1h3c0-1.11.89-2 2-2 1.11 0 2 .89 2 2h3c.55 0 1 .45 1 1v5h-1V5H3v9h10v-2zM4 4h8c0-.55-.45-1-1-1h-1c-.55 0-1-.45-1-1s-.45-1-1-1-1 .45-1 1-.45 1-1 1H5c-.55 0-1 .45-1 1z\"/></svg>");
            border-color: currentcolor;
        }
        .swagger-ui select {
            background-color: rgb(29, 31, 32);
            background-image: url("data:image/svg+xml;charset=utf-8,<svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 20 20\"><path d=\"M13.418 7.859a.695.695 0 0 1 .978 0 .68.68 0 0 1 0 .969l-3.908 3.83a.697.697 0 0 1-.979 0l-3.908-3.83a.68.68 0 0 1 0-.969.695.695 0 0 1 .978 0L10 11l3.418-3.141z\"/></svg>");
            border-color: rgb(116, 108, 96);
            box-shadow: rgba(0, 0, 0, 0.25) 0px 1px 2px 0px;
            color: rgb(188, 182, 173);
        }
        .swagger-ui select[multiple] {
            background-color: rgb(29, 31, 32);
            background-image: none;
        }
        .swagger-ui select.invalid {
            background-color: rgb(61, 3, 3);
            background-image: none;
            border-color: rgb(157, 5, 5);
        }
        .swagger-ui label {
            color: rgb(188, 182, 173); 
        }
        .swagger-ui input[type="email"], .swagger-ui input[type="file"], .swagger-ui input[type="password"], .swagger-ui input[type="search"], .swagger-ui input[type="text"],
        .swagger-ui textarea {
            background-color: rgb(24, 26, 27);
            background-image: none;
            border-color: rgb(59, 64, 66); 
        }
        .swagger-ui input[type="email"].invalid, .swagger-ui input[type="file"].invalid, .swagger-ui input[type="password"].invalid, .swagger-ui input[type="search"].invalid, .swagger-ui input[type="text"].invalid,
        .swagger-ui textarea.invalid {
            background-color: rgb(61, 3, 3);
            background-image: none;
            border-color: rgb(157, 5, 5);
        }
        .swagger-ui input[disabled],
        .swagger-ui select[disabled],
        .swagger-ui textarea[disabled] {
            background-color: rgb(27, 29, 30);
            color: rgb(157, 148, 136);
        }
        .swagger-ui select[disabled] {
            border-color: rgb(82, 88, 92);
        }
        .swagger-ui textarea[disabled] {
            background-color: rgb(54, 58, 61);
            color: rgb(232, 230, 227);
        }
        .swagger-ui textarea {
            background-color: rgba(24, 26, 27, 0.8);
            background-image: none;
            border-color: currentcolor;
            color: rgb(188, 182, 173);
            outline-color: currentcolor;
        }
        .swagger-ui textarea:focus {
            border-color: rgb(1, 74, 149);
        }
        .swagger-ui textarea.curl {
            background-color: rgb(54, 58, 61);
            background-image: none;
            color: rgb(232, 230, 227);
        }
        .swagger-ui .checkbox {
            color: rgb(202, 197, 190);
        }
        .swagger-ui .checkbox p {
            color: rgb(188, 182, 173); 
        }
        .swagger-ui .checkbox input[type="checkbox"] + label > .item {
            background-color: rgb(37, 40, 42);
            background-image: none;
            box-shadow: rgb(37, 40, 42) 0px 0px 0px 2px; 
        }
        .swagger-ui .checkbox input[type="checkbox"]:checked + label > .item {
            background-color: rgb(37, 40, 42);
            background-image: url("data:image/svg+xml;charset=utf-8,<svg width=\"10\" height=\"8\" viewBox=\"3 7 10 8\" xmlns=\"http://www.w3.org/2000/svg\"><path fill=\"%2341474E\" fill-rule=\"evenodd\" d=\"M6.333 15 3 11.667l1.333-1.334 2 2L11.667 7 13 8.333z\"/></svg>");
        }
        .swagger-ui .dialog-ux .backdrop-ux {
            background-color: rgba(0, 0, 0, 0.8);
            background-image: none;
        }
        .swagger-ui .dialog-ux .modal-ux {
            background-color: rgb(24, 26, 27);
            background-image: none;
            border-color: rgb(54, 58, 60);
            box-shadow: rgba(0, 0, 0, 0.2) 0px 10px 30px 0px;
        }
        .swagger-ui .dialog-ux .modal-ux-content p {
            color: rgb(188, 182, 173);
        }
        .swagger-ui .dialog-ux .modal-ux-content h4 {
            color: rgb(188, 182, 173);
        }
        .swagger-ui .dialog-ux .modal-ux-header {
            border-bottom-color: rgb(54, 58, 60);
        }
        .swagger-ui .dialog-ux .modal-ux-header .close-modal {
            background-color: rgba(0, 0, 0, 0);
            background-image: none;
            border-color: currentcolor;
        }
        .swagger-ui .dialog-ux .modal-ux-header h3 {
            color: rgb(188, 182, 173);
        }
        .swagger-ui .model {
            color: rgb(188, 182, 173);
        }
        .swagger-ui .model .deprecated span,
        .swagger-ui .model .deprecated td {
            color: rgb(172, 165, 154) !important;
        }
        .swagger-ui .model .deprecated > td:first-of-type {
            text-decoration-color: currentcolor;
        }
        .swagger-ui .model-toggle::after {
            background-color: rgba(0, 0, 0, 0);
            background-image: url("data:image/svg+xml;charset=utf-8,<svg xmlns=\"http://www.w3.org/2000/svg\" width=\"24\" height=\"24\"><path d=\"M10 6 8.59 7.41 13.17 12l-4.58 4.59L10 18l6-6z\"/></svg>");
        }
        .swagger-ui .model-hint {
            background-color: rgba(0, 0, 0, 0.7);
            background-image: none;
            color: rgb(219, 216, 212);
        }
        .swagger-ui .model .property {
            color: rgb(168, 160, 149);
        }
        .swagger-ui .model .property.primitive {
            color: rgb(164, 157, 145);
        }
        .swagger-ui table.model tr.description {
            color: rgb(168, 160, 149);
        }
        .swagger-ui table.model tr.property-row .star {
            color: rgb(255, 26, 26);
        }
        .swagger-ui table.model tr.extension {
            color: rgb(157, 148, 136);
        }
        .swagger-ui section.models {
            border-color: rgba(117, 109, 96, 0.3);
        }
        .swagger-ui section.models.is-open h4 {
            border-bottom-color: rgba(117, 109, 96, 0.3);
        }
        .swagger-ui section.models h4 {
            color: rgb(171, 164, 153);
        }
        .swagger-ui section.models h4:hover {
            background-color: rgba(0, 0, 0, 0.02);
            background-image: none;
        }
        .swagger-ui section.models h5 {
            color: rgb(161, 153, 141);
        }
        .swagger-ui section.models .model-container {
            background-color: rgba(0, 0, 0, 0.05);
            background-image: none;
        }
        .swagger-ui section.models .model-container:hover {
            background-color: rgba(0, 0, 0, 0.07);
            background-image: none;
        }
        .swagger-ui section.models .model-box {
            background-color: rgba(0, 0, 0, 0);
            background-image: none;
        }
        .swagger-ui .model-box {
            background-color: rgba(0, 0, 0, 0.1);
            background-image: none;
        }
        .swagger-ui .model-title {
            color: rgb(181, 175, 166);
        }
        .swagger-ui .model-deprecated-warning {
            color: rgb(249, 70, 70);
        }
        .swagger-ui .prop-type {
            color: rgb(119, 144, 187);
        }
        .swagger-ui .prop-format {
            color: rgb(171, 164, 153);
        }
        .swagger-ui .servers > label {
            color: rgb(188, 182, 173);
        }
        .swagger-ui table.headers td {
            color: rgb(188, 182, 173);
        }
        .swagger-ui table.headers .header-example {
            color: rgb(168, 160, 149);
        }
        .swagger-ui table thead tr td,
        .swagger-ui table thead tr th {
            border-bottom-color: rgba(117, 109, 96, 0.2);
            color: rgb(188, 182, 173);
        }
        .swagger-ui .parameter__name {
            color: rgb(188, 182, 173);
        }
        .swagger-ui .parameter__name.required span {
            color: rgb(255, 26, 26);
        }
        .swagger-ui .parameter__name.required::after {
            color: rgba(255, 26, 26, 0.6);
        }
        .swagger-ui .parameter__extension,
        .swagger-ui .parameter__in {
            color: rgb(152, 143, 129);
        }
        .swagger-ui .parameter__deprecated {
            color: rgb(255, 26, 26);
        }
        .swagger-ui .response__extension {
            color: rgb(152, 143, 129);
        }
        .swagger-ui .topbar {
            background-color: #09090B;
        }
        .swagger-ui .topbar a {
            color: rgb(232, 230, 227); text-decoration-color: currentcolor; 
        }
        .swagger-ui .topbar .download-url-wrapper input[type="text"] {
            border-color: rgb(83, 135, 53);
            outline-color: currentcolor;
        }
        .swagger-ui .topbar .download-url-wrapper .select-label {
            color: rgb(223, 220, 215);
        }
        .swagger-ui .topbar .download-url-wrapper .select-label select {
            border-color: rgb(83, 135, 53);
            box-shadow: none;
            outline-color: currentcolor;
        }
        .swagger-ui .topbar .download-url-wrapper .download-url-button {
            background-color: rgb(78, 128, 50);
            background-image: none;
            border-color: currentcolor;
            color: rgb(232, 230, 227);
        }
        .swagger-ui .info li,
        .swagger-ui .info p,
        .swagger-ui .info table {
            color: rgb(188, 182, 173);
        }
        .swagger-ui .info h1,
        .swagger-ui .info h2,
        .swagger-ui .info h3,
        .swagger-ui .info h4,
        .swagger-ui .info h5 {
            color: rgb(188, 182, 173);
        }
        .swagger-ui .info a {
            color: rgb(84, 161, 228);
        }
        .swagger-ui .info a:hover {
            color: rgb(96, 168, 229);
        }
        .swagger-ui .info .base-url {
            color: rgb(188, 182, 173);
        }
        .swagger-ui .info .title {
            color: rgb(188, 182, 173);
        }
        .swagger-ui .info .title small {
            background-color: rgb(91, 99, 103);
            background-image: none;
        }
        .swagger-ui .info .title small.version-stamp {
            background-color: rgb(110, 153, 3);
        }
        .swagger-ui .info .title small pre {
            color: rgb(232, 230, 227);
        }
        .swagger-ui .auth-container {
            border-bottom-color: rgb(54, 58, 60);
        }
        .swagger-ui .auth-container:last-of-type {
            border-color: currentcolor;
        }
        .swagger-ui .auth-container .errors {
            background-color: rgb(61, 0, 0);
            color: rgb(188, 182, 173);
        }
        .swagger-ui .scopes h2 {
            color: rgb(188, 182, 173);
        }
        .swagger-ui .scopes h2 a {
            color: rgb(84, 161, 228);
            text-decoration-color: currentcolor;
        }
        .swagger-ui .errors-wrapper {
            background-color: rgba(165, 5, 5, 0.1);
            background-image: none;
            border-color: rgb(157, 5, 5);
        }
        .swagger-ui .errors-wrapper .errors h4 {
            color: rgb(188, 182, 173);
        }
        .swagger-ui .errors-wrapper .errors small {
            color: rgb(171, 164, 153);
        }
        .swagger-ui .errors-wrapper .errors .error-line {
            text-decoration-color: currentcolor;
        }
        .swagger-ui .errors-wrapper hgroup h4 {
            color: rgb(188, 182, 173);
        }
        .swagger-ui .markdown pre,
        .swagger-ui .renderedMarkdown pre {
            background-color: rgba(0, 0, 0, 0);
            background-image: none;
            color: rgb(232, 230, 227);
        }
        .swagger-ui .markdown code,
        .swagger-ui .renderedMarkdown code {
            background-color: rgba(0, 0, 0, 0.05);
            background-image: none;
            color: rgb(154, 38, 254);
        }
        body {
            background-color: rgb(27, 29, 30);
            background-image: none;
        }
       
`