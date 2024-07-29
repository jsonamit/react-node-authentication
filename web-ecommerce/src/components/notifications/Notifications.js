import React from 'react'

export default function Toasts() {

  return (
    <>
        <div aria-live="polite" aria-atomic="true" style="position: relative; min-height: 200px;">
            <div class="toast" style="position: absolute; top: 0; right: 0;">
                <div class="toast-header">
                <strong class="mr-auto">Notify</strong>
                <button type="button" class="ml-2 mb-1 close" data-dismiss="toast" aria-label="Close">
                    <span aria-hidden="true">&times;</span>
                </button>
                </div>
                <div class="toast-body">
                    User Not Found
                </div>
            </div>
        </div>
    </>
  )
}